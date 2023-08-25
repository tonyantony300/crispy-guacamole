const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const createError = require('http-errors');
const path = require('path');

// Initialize Express app
const app = express();

// Configure MongoDB connection
mongoose.connect('mongodb://localhost:27017/slot-booker', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.once('open', () => {
  console.log('Connected to MongoDB');
});
db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

// Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const indexRouter = require('./routes/index');
const sessionsRouter = require('./routes/sessions');
const authRouter = require('./routes/auth');


app.use('/', indexRouter);
app.use('/sessions', sessionsRouter);
app.use('/auth', authRouter);

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// Error handler
app.use((err, req, res, next) => {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render the error page
  res.status(err.status || 500);
  res.json({ error: err.message });
});

app.listen(3000, () => {
  console.log('app listening')
})

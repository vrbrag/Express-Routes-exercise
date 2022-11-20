const express = require('express')
const app = express()
const expressError = require('./expressErrors')
const { convertAndValidateNumsArray, findMean, findMedian, findMode } = require('./helpers')

// MEAN
app.get('/mean', (req, res, next) => {
   if (!req.query.nums) {
      throw new expressError('A list of numbers are required and must be seperated by commas', 400)
   }
   const numsArrayString = req.query.nums.split(',')
   const nums = convertAndValidateNumsArray(numsArrayString)

   if (nums instanceof Error) {
      throw new expressError(nums.message);
   }

   let response = {
      operation: "mean",
      value: findMean(nums)
   }
   return res.send(response);
})

// MEDIAN
// order the data smallest->biggest
// middle value = nums.length/2
// if nums.length is odd, round up
// if nums.length is even, add two middle values together
app.get('/median', (req, res, next) => {
   const numsArrayString = req.query.nums.split(',')
   const nums = convertAndValidateNumsArray(numsArrayString)

   if (nums instanceof Error) {
      throw new expressError(nums.message);
   }
   let response = {
      operation: "median",
      value: findMedian(nums)
   }
   return res.send(response)
})

// MODE
// frequency of a value in a data set
app.get('/mode', (req, res, next) => {
   const numsArrayString = req.query.nums.split(',')
   const nums = convertAndValidateNumsArray(numsArrayString)

   if (nums instanceof Error) {
      throw new expressError(nums.message);
   }
   let response = {
      operation: "mode",
      value: findMode(nums)
   }
   return res.send(response)
})


app.use((req, res, next) => {
   const err = new expressError('Not found', 400)
   return next(err)
})

app.use((err, req, res, next) => {
   res.status(err.status || 500);

   return res.json({
      error: err,
      message: err.message
   });
})

app.listen(3000, function () {
   console.log('Server 3000 running')
})
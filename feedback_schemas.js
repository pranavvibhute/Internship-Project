const mongoose = require('mongoose');


// Test Performance Schema (Aggregated Data)
const testPerformanceSchema = new mongoose.Schema({
  tests: [
    {
       testId: { type:String, required: true },  // Correct usage of required
      score: { type: Number, required: false },  // You can set required to false if needed
      accuracyRate: { type: Number, required: false },
      timetaken: { type: Number, required: false },
      average_test_correctAnswers: { type: Number, required: false },
      average_test_incorrectAnswers: { type: Number, required: false },
      average_test_unattemptedQuestions: { type: Number, required: false },
      total_test_questions: { type: Number, required: false },
    }
  ],
  chapterAnalysis: [
    {
      chapterId: { type:String, required: true },  // Correct usage of required
      averageCorrect: { type: Number, required: false },
      averageIncorrect: { type: Number, required: false },
      averageUnattempted: { type: Number, required: false },
      total_chapter_questions: { type: Number, required: false },
    }
  ],
  weakChapters: [
    {
      chapterId: { type:String, required: true },  // Correct usage of required
      reason: { type: String, required: false },
    }
  ],
  cognitive: { type: String, enum: ['Formula-Based', 'Conceptual', 'Application-Based'], required: true },
  questionType: { type: String, enum: ['MCQ', 'True/False', 'Numerical'], required: true },
  difficultyAnalysis: [
    {
      difficultyLevel: { type: String, enum: ['easy', 'medium', 'hard'], required: true },  // Correct usage of required
      accuracyRate: { type: Number, required: false },
    }
  ],
  timeAnalysis: {
    averageTimeTaken: { type: Number, required: true },  // Correct usage of required
  }
});

// Student Performance Schema (Individual Trends)
const studentPerformanceSchema = new mongoose.Schema({
  studentId: { type: String, required: true },  // Correct usage of required
  tests: [
    {
      testId: { type:String, required: true },  // Correct usage of required
      score: { type: Number, required: true },
      accuracyRate: { type: Number, required: false },
      timetaken: { type: Number, required: false },
      test_correctAnswers: { type: Number, required: false },
      test_incorrectAnswers: { type: Number, required: false },
      test_unattemptedQuestions: { type: Number, required: false },
      chapterPerformance: [
        {
          chapterId: { type:String, required: true },  // Correct usage of required
          chapter_correctAnswers: { type: Number, required: false },
          chapter_incorrectAnswers: { type: Number, required: false },
          chapter_unattemptedQuestions: { type: Number, required: false },
          chapter_score:{type:Number,required:true},
        }
      ],
    }
  ],
});

// Exporting Models
module.exports = {
  StudentPerformance: mongoose.model('StudentPerformance', studentPerformanceSchema),
  TestPerformance: mongoose.model('TestPerformance', testPerformanceSchema),
};







  

  


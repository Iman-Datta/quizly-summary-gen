
import { SummaryItem, Question } from '../context/AppContext';

// In a real implementation, the OpenAI API key would be stored in environment variables on the server side
// For demonstration purposes, we'll use a placeholder key and simulate the API calls
const OPENAI_API_KEY_MISSING = "OPENAI_API_KEY_NOT_SET";

// Interface for the summary generation request
interface GenerateSummaryRequest {
  text: string;
}

// Interface for the quiz generation request
interface GenerateQuizRequest {
  summary: SummaryItem[];
}

// Since we can't make real API calls without a valid API key,
// we'll simulate the responses for demonstration purposes

export const generateSummary = async (text: string): Promise<SummaryItem[]> => {
  console.log('Generating summary for text:', text.substring(0, 100) + '...');
  
  // Simulate API processing time
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // Mock summary data
  const mockSummary: SummaryItem[] = [
    {
      title: "Main Concepts",
      points: [
        "Educational content is parsed from PDF documents for learning purposes",
        "Text extraction is performed to obtain readable content",
        "Natural language processing creates structured information",
        "Summarization focuses on key points and main ideas"
      ]
    },
    {
      title: "Key Benefits",
      points: [
        "Easy comprehension of complex materials",
        "Faster learning through organized bullet points",
        "Reinforcement through interactive quizzes",
        "Immediate feedback on understanding"
      ]
    },
    {
      title: "Learning Applications",
      points: [
        "Academic study and exam preparation",
        "Professional development and training",
        "Self-paced learning for various subjects",
        "Knowledge retention through testing"
      ]
    }
  ];
  
  return mockSummary;
};

export const generateQuiz = async (summary: SummaryItem[]): Promise<Question[]> => {
  console.log('Generating quiz based on summary:', summary);
  
  // Simulate API processing time
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Mock quiz questions data
  const mockQuestions: Question[] = [
    {
      question: "What is the primary purpose of parsing PDFs in this application?",
      options: [
        "To modify the PDF structure",
        "To extract text for educational purposes",
        "To create new PDF documents",
        "To validate PDF authenticity"
      ],
      correctAnswer: 1,
      explanation: "The application parses PDFs to extract educational content that can be used for learning purposes."
    },
    {
      question: "Which process is used to create structured information from text?",
      options: [
        "Data validation",
        "Text compression",
        "Natural language processing",
        "Binary encoding"
      ],
      correctAnswer: 2,
      explanation: "Natural language processing techniques are used to transform raw text into structured, meaningful information."
    },
    {
      question: "What is the focus of the summarization process?",
      options: [
        "Grammar correction",
        "Key points and main ideas",
        "Document formatting",
        "File size reduction"
      ],
      correctAnswer: 1,
      explanation: "The summarization process focuses on extracting and presenting key points and main ideas from the content."
    },
    {
      question: "Which of the following is a stated benefit of the summarization feature?",
      options: [
        "Improved writing skills",
        "Enhanced document security",
        "Easier comprehension of complex materials",
        "Reduced storage requirements"
      ],
      correctAnswer: 2,
      explanation: "The summary helps users more easily comprehend complex materials by organizing information into digestible points."
    },
    {
      question: "How are quiz questions used in the learning process?",
      options: [
        "To grade users' performance",
        "To reinforce learning through testing",
        "To collect user data",
        "To generate new content"
      ],
      correctAnswer: 1,
      explanation: "Interactive quizzes reinforce learning by testing understanding and providing immediate feedback."
    },
    {
      question: "Which application of this platform would be most suitable for a college student?",
      options: [
        "Content creation",
        "Document storage",
        "Academic study and exam preparation",
        "Professional networking"
      ],
      correctAnswer: 2,
      explanation: "Academic study and exam preparation is explicitly mentioned as an application, making it most suitable for college students."
    },
    {
      question: "What does the platform provide immediately after a quiz question is answered?",
      options: [
        "New learning materials",
        "Peer comparison statistics",
        "Feedback on understanding",
        "Certificate of completion"
      ],
      correctAnswer: 2,
      explanation: "The platform provides immediate feedback on understanding when quiz questions are answered."
    },
    {
      question: "Which learning approach is supported by the platform's features?",
      options: [
        "Collaborative learning only",
        "Instructor-led training only",
        "Self-paced learning for various subjects",
        "Standardized testing preparation only"
      ],
      correctAnswer: 2,
      explanation: "Self-paced learning for various subjects is supported by the platform's features for individual study."
    },
    {
      question: "What type of content organization is used in the summary?",
      options: [
        "Chronological ordering",
        "Alphabetical sorting",
        "Bullet points for key concepts",
        "Random arrangement"
      ],
      correctAnswer: 2,
      explanation: "The summary is organized using bullet points to clearly present key concepts and facilitate easy reading."
    },
    {
      question: "Which cognitive process is primarily supported by the quiz feature?",
      options: [
        "Creativity",
        "Knowledge retention",
        "Social intelligence",
        "Physical coordination"
      ],
      correctAnswer: 1,
      explanation: "Knowledge retention through testing is specifically mentioned as a benefit of the quiz feature."
    }
  ];
  
  return mockQuestions;
};

// Helper function to check if OpenAI API key is set
export const isApiKeySet = (): boolean => {
  // In a real implementation, this would check if the environment variable is properly set
  // For now, we'll always return false since we're simulating the API calls
  return false;
};

// In a real implementation, we would create functions to make actual calls to the OpenAI API
// using the API key stored in environment variables

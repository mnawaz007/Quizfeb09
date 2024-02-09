import ecotourism from '../assets/ecotourism.jpeg'
import heritage from '../assets/heritage.jpeg'
import northernlights from '../assets/Northern-lights.jpeg'
import romeo from '../assets/romeo.jpeg'
import sporting from '../assets/Sporting.jpeg'


export  const Questions = [
   {
    id: 1,
    statement: "What is ecotourism primarily focused on?",
    options: [ "Cultural experiences", " Adventure sports", " Wildlife conservation", "Luxury accommodations"],
    correctAnswerArr: 2, 
    image: <img src={ecotourism} alt="touris" height={200} width={400} className='img img-fluid d-block mx-auto' />
  },
  {
    id: 2,
    statement: "Which of the following is a UNESCO World Heritage Site known for its ancient architecture?",
    options: ["Machu Picchu", "Times Square", "Dubai Mall", " Sydney Opera Hous"],
    correctAnswerArr: 0, 
    image: <img src={heritage} alt="touris" height={200} width={400} className='img img-fluid d-block mx-auto' />
  },
  {
    id: 3,
    statement: "Which country is famous for its stunning fjords and Northern Lights?",
    options: ["Switzerland"," Iceland"," Japan"," Brazi"],
    correctAnswerArr: 1, 
    image: <img src={northernlights} alt="touris" height={200} width={400} className='img img-fluid d-block mx-auto' />
  },
  {
    id: 4,
    statement: " Who wrote 'Romeo and Juliet'?",
    options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
    correctAnswerArr: 1, 
    image: <img src={romeo} alt="touris" height={200} width={400} className='img img-fluid d-block mx-auto' />
  },
   {
     id: 5,
     statement: "Which type of tourism involves traveling to experience a major sporting event?",
     options: [" Adventure tourism", "Cultural tourism", "Sports tourism", "Wellness tourism"],
     correctAnswerArr: 2, 
     image: <img src={sporting} alt="touris" height={200} width={400} className='img img-fluid d-block mx-auto' />
   },
  // {
  //   id: 6,
  //   statement: "6. What is the powerhouse of the cell?",
  //   options: ["Nucleus", "Mitochondria", "Endoplasmic Reticulum", "Golgi Apparatus"],
  //   correctAnswerArr: 1
  // },
  // {
  //   id: 7,
  //   statement: "7. In which year did the Titanic sink?",
  //   options: ["1912", "1920", "1905", "1931"],
  //   correctAnswerArr: 0
  // },
  // {
  //   id: 8,
  //   statement: "8. Which country is known as the Land of the Rising Sun?",
  //   options: ["China", "Japan", "South Korea", "Vietnam"],
  //   correctAnswerArr: 1
  // },
  // {
  //   id: 9,
  //   statement: "9. What is the chemical symbol for gold?",
  //   options: ["Ag", "Au", "Fe", "Cu"],
  //   correctAnswerArr: 1
  // },
  // {
  //   id: 10,
  //   statement: "10. Who was the first President of the United States?",
  //   options: ["Thomas Jefferson", "John Adams", "George Washington", "James Madison"],
  //   correctAnswerArr: 2
  // }
]
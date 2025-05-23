const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema(
  {
    date: {
      type: String,
      required: true,
      unique: true,
    },
    title: {
      type: String,
      required: true,
      unique: true,
    },
    info: {
      type: String,
      required: true,
      unique: true,
    },
    location: {
      type: String,
      required: true,
      unique: true,
    },
    duration: {
      type: Number,
      required: true,
      unique: true,
    },
    cost: {
      type: Number,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("tours", tourSchema);

// const tours = [
//     {
//         id: 1,
//         image: "tour1.jpg",
//         date: "August 26th, 2020",
//         title: "Tibet Adventure",
//         info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
//         location: "China",
//         duration: 6,
//         cost: 2100,
//     },
//     {
//         id: 2,
//         image: "tour2.jpg",
//         date: "June 15th, 2021",
//         title: "Machu Picchu Expedition",
//         info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, quasi et fugiat iusto atque tempore explicabo.",
//         location: "Peru",
//         duration: 8,
//         cost: 2800,
//     },
//     {
//         id: 3,
//         image: "tour3.jpg",
//         date: "September 10th, 2022",
//         title: "Safari Adventure",
//         info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum modi minima adipisci autem, saepe maxime reprehenderit eos quas tempore.",
//         location: "Kenya",
//         duration: 7,
//         cost: 3500,
//     },
//     {
//         id: 4,
//         image: "tour4.jpg",
//         date: "April 5th, 2021",
//         title: "Greek Island Hopping",
//         info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quia autem. Soluta tempora, aliquid nobis quos distinctio ducimus?",
//         location: "Greece",
//         duration: 10,
//         cost: 2600,
//     },
//     {
//         id: 5,
//         image: "tour5.jpg",
//         date: "July 12th, 2023",
//         title: "Amazon Rainforest Exploration",
//         info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime voluptatum repellendus, saepe a quos placeat dolorem dolores non iste.",
//         location: "Brazil",
//         duration: 9,
//         cost: 3800,
//     },
// ];

// module.exports = tours;

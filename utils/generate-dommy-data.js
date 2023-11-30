import { faker } from "@faker-js/faker";


// Define specific users 
const users = [
  { id: "1", name: "happy rabbit", photo: "https://i.pinimg.com/originals/fd/eb/63/fdeb63748cafa810e334f0a4bf05e8c3.jpg", skills: "baking" },
  { id: "2", name: "uof_official", photo: "https://static01.nyt.com/images/2016/12/02/well/move/yoga_body_images-slide-NY4R/yoga_body_images-slide-NY4R-facebookJumbo-v2.jpg", skills: "Yoga" },
  { id: "3", name: "ATHELTE_Union", photo: "https://i.pinimg.com/736x/5a/15/65/5a15659ddc90a2f30335d078b755cc23.jpg", skills: "Dodgeball" },
  { id: "4", name: "res-search", photo: "https://pbs.twimg.com/profile_images/1392258537993211905/kYxkTjiE_400x400.jpg", skills: "Basketball" },
];

function createSpecificPost(postData) {
  const { author, title, content , image, likesCount} = postData;
  // console.log("inside createSpecificPost", author);

  return {
    id: faker.string.uuid(),
    title,
    author: {
      id: author.id,
      name: author.name,
      photo: author.photo,
      skills: author.skills,
    },
    content,
    image: image,
    likesCount: likesCount,
    createdAt: faker.date.recent().toISOString(),
  };
}

// Create specific posts with the provided data
const postsData = [
  {
    author: users[0],
    content: "Need a snack break from your work? Come support our fundraising activity inside the Boolean building next Friday from 9AM to 4PM and get some donuts! Please bring cash or have e-transfer ready. Funds will go to our Support Rabbit Association 2024.",
    createdAt: "2023-11-29T11:12:09.073Z",
    id: "2cd87936-07be-4626-99e7-d3c468296aab",
    image: "https://media.istockphoto.com/id/1071915670/photo/happy-diverse-colleagues-celebrate-during-lunch-break-in-office.jpg?s=612x612&w=0&k=20&c=kv5QoUTDDSrrR5sr69kOa9A78u1ourPvdxoMQp0hL8E=",
    likesCount: 1,
    title: "Fundraiser: Donuts Sale",
  },
  {
    author: users[1],
    content: "Hey everyone! We are excited to announce that we are collaborating with @bestyoga to host two hot yoga sessions! They will be held both on December 22nd and 23rd 2:00-3:00 PM! All proceeds will go to subsidizing uof engineering society and promoting student health and wellbeing.",
    createdAt: "2023-11-29T11:12:09.073Z",
    id: "2cd87936-07be-4626-99e7-d3c468296aab",
    image: "https://files.nccih.nih.gov/yoga-gettyimages-1204500395-16-9.jpg",
    likesCount: 1,
    title: "Yoga Class",
  },
  {
    author: users[2],
    content: "Are you ready to play dodgeball for a good cause? Show up, dodge some balls, eat some baked goods and have a good time! Registration link in bio! ",
    createdAt: "2023-11-29T11:12:09.073Z",
    id: "2cd87936-07be-4626-99e7-d3c468296aab",
    image: "https://media.yourschoolgames.com/images/Dodgeball_School_Games_1.width-550.png",
    likesCount: 1,
    title: "Dodgeball Tournamen",
  },
  {
    author: users[3],
    content: "Come along with us as we checkout the @JavascriptRestaurant for happy hour to catch the NBA opening night. The food was incredible and it was a perfect spot for game day",
    createdAt: "2023-11-29T14:55:40.254Z",
    id: "dd1f5ae8-ddf6-44cd-b686-49ca4199a961",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Restaurant_Näsinneula.jpg/640px-Restaurant_Näsinneula.jpg",
    likesCount: 1,
    title: "Chill Night with NBA",
  },
  // Add more post data as needed
];

// Function to generate multiple posts
function generatePosts() {
  return postsData.map((postData) => createSpecificPost(postData));
}

// Export the functions and data
export { generatePosts };

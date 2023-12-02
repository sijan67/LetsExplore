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
  {
    author: users[4],
    content:"Join forces with fellow nature lovers this Saturday at River Park for a community cleanup day! Let’s keep our city green and clean. Gloves and bags will be provided. See you at 8 AM by the main entrance.",
    createdAt: "2023-11-30T15:55:40.254Z",
    id: "dd1f5ae8-ddf6-44cd-b686-49ca4199a961",
    image:"https://thecatalinaislander.com/wp-content/uploads/2021/04/CLEAN.jpg",
    likesCount: 2,
    title: "Community Cleanup Day",
  },
  {
    author: users[5],
    content:"Fancy a game of chess? Whether you're a grandmaster or a beginner, come down to Liberty Square this Sunday at 11 AM for Chess in the Park. Boards provided, and fun guaranteed!",
    createdAt: "2023-11-30T15:55:40.254Z",
    id: "dd1f5ae8-ddf6-44cd-b686-49ca4199a961",
    image:"https://www.centralpark.com/downloads/10680/download/Chess-in-the-Park-Photo-Erik-Bardin.jpg?cb=888f2af6b62d7d2b2f5caea62625c420",
    likesCount: 2,
    title: "Chess in the Park",
  },
  {
    author: users[6],
    content:"Explore the cosmos with us! We’re hosting a stargazing night on Hilltop Field this Friday starting at 9 PM. Telescopes will be available, and an expert will guide us through the constellations.",
    createdAt: "2023-11-30T15:55:40.254Z",
    id: "dd1f5ae8-ddf6-44cd-b686-49ca4199a961",
    image:"https://www.nps.gov/arch/planyourvisit/images/star-party-light-saber-1000w.jpg?maxwidth=1300&maxheight=1300&autorotate=false",
    likesCount: 2,
    title: "Stargazing Night",
  },
  {
    author: users[3],
    content:"Content: Coders unite for a weekend hackathon to solve social issues! Prizes for the best solutions. Sign up alone or with a team. Food and drinks on us. Hack starts online at 10 AM, July 3rd. Details on our website.",
    createdAt: "2023-11-30T15:55:40.254Z",
    id: "dd1f5ae8-ddf6-44cd-b686-49ca4199a961",
    iamge:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fmedium.com%2F%40geetika_keim%2Fstay-updated-about-upcoming-hackathons-and-tech-events-90d151c72942&psig=AOvVaw1FNSaGaYfRoHpR1gLF7BO7&ust=1701506425519000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMC9r8Lr7YIDFQAAAAAdAAAAABAE",
    likesCount: 2,
    title: "Hackathon for Good",
  },


  // Add more post data as needed
];

// Function to generate multiple posts
function generatePosts() {
  return postsData.map((postData) => createSpecificPost(postData));
}

// Export the functions and data
export { generatePosts };

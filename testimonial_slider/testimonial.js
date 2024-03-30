const testimonialArray = [
    "“The Lorem Ipsum Company has been an integral part of our content marketing success. We have seen a notable increase in organic leads since we began using their services in 2012.”", "“My busy schedule leaves little, if any, time for blogging and social media. The Lorem Ipsum Company has been a huge part of helping me grow my business through organic search and content marketing.”", "Jeramy and his team at the Lorem Ipsum Company whipped my website into shape just in time for tax season. I was excited by the results and am proud to direct clients to my website once again.", "Professional, responsive, and able to keep up with ever-changing demand and tight deadlines: That's how I would describe Jeramy and his team at The Lorem Ipsum Company. When it comes to content marketing, you'll definitely get the 5-star treatment from the Lorem Ipsum Company!", "After being forced to move twice within five years, our customers had a hard time finding us and our sales plummeted. The Lorem Ipsum Co. not only revitalized our brand, but saved our nearly 100-year-old family business from the brink of ruin by optimizing our website for search and creating our Google My Business listing.", "I was skeptical of SEO and content marketing at first, but the Lorem Ipsum Company not only proved itself financially speaking, but the response I have received from customers is incredible. The work is top-notch and I consistently outrank all my competitors on Google."
]

const authorsArray = [
    "Roland Weedon", "Kelsi Gordon", "Seth Gewirtz", "Tasha Zuzalek", "Rob Joor", "Mike Brashears"
]

// const imgarray=[
//     "https://source.unsplash.com/random/150×150/?face","https://source.unsplash.com/random/150×150/?dog","https://source.unsplash.com/random/150×150/?animal","https://source.unsplash.com/random/150×150/?tree","https://source.unsplash.com/random/150×150/?google","https://source.unsplash.com/random/150×150/?water"
// ]
const imgarray2=[
    "/testimonial_slider/a.webp",
    "/testimonial_slider/b.jpg",
    "/testimonial_slider/c.webp",
    "/testimonial_slider/d.webp",
    "/testimonial_slider/e.webp",
    "/testimonial_slider/f.webp"
]
// console.log(imgarray2)
// let imgUrl = "https://source.unsplash.com/random/150×150/?face"
let testimonial = document.querySelector("#testimonial")
let image = document.querySelector("#image")
let author = document.querySelector("#author")
    
console.log(testimonial)
console.log(author)
console.log(image)
console.log(testimonialArray)
console.log(authorsArray)


let count = 0
setInterval(() => {
    testimonial.innerText = testimonialArray[count]
    author.innerText = authorsArray[count]
    image.src=`${imgarray2[count]}`
    // image.src=imgUrl
    count++
    // console.log(count)
    if(count>testimonialArray.length-1){
        count=0
    }

},1000)
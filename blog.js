let blog_modal = document.querySelector('.blog_modal');

let closeBtn = document.querySelector('.close_btn');
closeBtn.onclick = ()=>{
    closeModal();
}
function closeModal(){
    blog_modal.style.display = 'none';
}

// modal buttons:
let recents_btn = document.getElementById('recents_img');
recents_btn.onclick = ()=>{
    append_modal(modals[0]);
}

let modal2Btn =  document.getElementById('recents_grid1');
modal2Btn.onclick = ()=>{
    append_modal(modals[1]);
}
let modal3Btn =  document.getElementById('recents_grid2');
modal3Btn.onclick = ()=>{
    append_modal(modals[2]);
}
let modal4Btn =  document.getElementById('recents_grid3');
modal4Btn.onclick = ()=>{
    append_modal(modals[3]);
}
let modal5Btn =  document.getElementById('mBay-1');
modal5Btn.onclick = ()=>{
    append_modal(modals[1]);
}
let modal6Btn =  document.getElementById('mBay-2');
modal6Btn.onclick = ()=>{
    append_modal(modals[4]);
}
let modal7Btn =  document.getElementById('mBay-3');
modal7Btn.onclick = ()=>{
    append_modal(modals[5]);
}
let modal8Btn =  document.getElementById('salesBay1')
modal8Btn.onclick = ()=>{
    append_modal(modals[6]);
}
let modal9Btn =  document.getElementById('salesBay2');
modal9Btn.onclick = ()=>{
    append_modal(modals[7]);
}
let modal10Btn =  document.getElementById('salesBay3');
modal10Btn.onclick = ()=>{
    append_modal(modals[8]);
}
let modal11Btn =  document.getElementById('servBay1');
modal11Btn.onclick = ()=>{
    append_modal(modals[9]);
}
let modal12Btn =  document.getElementById('servBay2');
modal12Btn.onclick = ()=>{
    append_modal(modals[10]);
}
let modal13Btn =  document.getElementById('servBay3');
modal13Btn.onclick = ()=>{
    append_modal(modals[11]);
}




// modal-content:
let modals = [
    {
    image:"https://www.engagebay.com/blog/wp-content/w3-webp/uploads/2022/10/best-saas-deals-2022.pngw3.webp",
    note : 'Happy Buying!',
},
{
    image:"https://www.engagebay.com/blog/wp-content/w3-webp/uploads/2022/09/hubspot-vs-mailchimp.pngw3.webp",
    note : 'How brilliant! Of the many marketing automation software out there, you have successfully narrowed your choice to just two — HubSpot and Mailchimp. With the suite of tools in both software, you can automate repetitive work and buy back your time to do other tasks.But while both software share similar features for email automation, form automation, ad management, and many more, they differ in pricing, quality of support, contract, and functionalities.',
},
{
    image:"https://www.engagebay.com/blog/wp-content/w3-webp/uploads/2022/02/personal-crm.pngw3.webp",
    note : 'Happy Happy customers are the foundation of the best businesses. It should go without saying how important it is to provide good customer service. So, let us look at reasons why more businesses should be making greater investments in their customer service strategies.!',
},
{
    image:"https://www.engagebay.com/blog/wp-content/w3-webp/uploads/2022/09/happy-customers.pngw3.webp",
    note : 'Happy customers are the foundation of the best businesses. It should go without saying how important it is to provide good customer service. So, let us look at reasons why more businesses should be making greater investments in their customer service strategies.',
},
{
    image:"https://www.engagebay.com/blog/wp-content/w3-webp/uploads/2020/01/email-drip-campaign.pngw3.webp",
    note : 'For many businesses, email is the most common way of communicating with their customers. Emails are a great tool to convince people to buy your product and convert leads into customers. However, not all your leads convert. Moreover, subscribers often receive the latest information about your brand after they have signed up. So, how do you ensure that your clients receive information at the right time? Through email drip campaigns. An email drip campaign is a series of automated emails sent to people after visitors take specific actions on your website.',
},
{
    image:"https://www.engagebay.com/blog/wp-content/w3-webp/uploads/2022/04/omnichannel-marketing.pngw3.webp",
    note : 'Omnichannel marketing is the seamless cooperation and integration of multiple channels businesses use to interact with customers — from messaging, customer touchpoints, branding, and marketing — with the aim of creating a streamlined customer experience. Today’s world is evolving at a rapid pace, and with it comes immense advances and challenges. Omnichannel marketing is no exception — many confuse multichannel with omnichannel marketing, and we understand why. And with so much competition today, understanding the fundamentals of omnichannel marketing and having a strong omnichannel marketing strategy can be the key to success.',
},
{
    image:"https://www.engagebay.com/blog/wp-content/w3-webp/uploads/2022/11/sales-volume.pngw3.webp",
    note : 'Some commonly used metrics to evaluate a business’s sales performance include gross profit, net income, conversion rate, length of the sales cycle, total revenue, and more. But to much surprise, companies often overlook one critical KPI, i.e., sales volume. Not to be confused with total sales, sales volume measures the number of units of a product sold by your company during a given financial period. On the other hand, total sales is the monetary value and is calculated as the multiplication result of the unit price of a product and its quantity sold. ',
},
{
    image:"https://www.engagebay.com/blog/wp-content/w3-webp/uploads/2022/10/spin-selling.pngw3.webp",
    note : 'Introduced in 1988 by Neil Rackham, a well-known author and consultant, the SPIN selling methodology helps sellers anticipate and respond to complex sales situations by asking the right questions to buyers. The term SPIN stands for ‘situation, problem, implication, and need payoff’. Over the past four decades, SPIN selling has proven to be one of the most effective ways of improving sales success and achieving bottom-line results. In fact, salespersons trained in the SPIN selling methodology showed a 17% improvement in the sales results of a company. In this post, we will talk about how SPIN selling works, the different stages of it, and some of the best practices for the same. ',
},
{
    image:"https://www.engagebay.com/blog/wp-content/w3-webp/uploads/2022/09/strategic-selling.pngw3.webp",
    note : 'Do you use the same sales strategy to sell across all customers? Chances are it may not have worked. Since every consumer is different, sales teams cannot implement the same strategy to sell each one of them. Although having frameworks to build and customize from is a great way to save time and standardize your marketing efforts, depending solely on generic templates will only get you so far.',
},
{
    image:"https://www.engagebay.com/blog/wp-content/w3-webp/uploads/2022/11/sorry-for-the-inconvenience.pngw3.webp",
    note : 'How do you admit a mistake? A meaningless ‘I am sorry!’ is no good. Whether you own a business or are an individual service provider, you may sometimes need to render an apology, so it helps to learn how to do it right. In this article, we’ll show you how.',
},
{
    image:"https://www.engagebay.com/blog/wp-content/w3-webp/uploads/2022/01/customer-service-tips-1.pngw3.webp",
    note : 'Every brand strives to attract new customers. More so than just your sales and marketing tactics, your business must also have a rock-solid customer service strategy. Fortunately, we have some awesome customer service tips just for you today.  When your customers have questions or concerns, how long does it take to get hold of you? How quickly do you solve the issues your customers face? If your answer is ‘too long’, or ‘not sure’, that won’t work going forward. According to stats from Alliance Virtual Offices, seven out of 10 US-based consumers are happy to spend more when they get exemplary customer service. If you want to see your sales and customer loyalty go up, then make sure your business takes these customer service tips to heart.',
},
{
    image:"https://www.engagebay.com/blog/wp-content/w3-webp/uploads/2022/09/customer-needs.pngw3.webp",
    note : 'Customer needs can be defined as the trigger that helps the customers make a purchase decision. A brand’s feature or benefit largely depends on the customer’s needs and affects their decision-making. For example, a food joint may target customers at 12 noon with offers and deals on lunch. Why? Because the customers are looking for the best food joints to order lunch. But this isn’t enough for the buyer to make a purchase decision. The type of food, location, and the amount of time are all factors that may affect the buyer’s decision and hence serve as the basis for the customer’s needs. However, different brands may have different customer needs.',
},
]



function append_modal(el){

    let modal = document.querySelector('.modal-content');
    let img = document.createElement('img');
    img.src = el.image;

    let notes = document.createElement('p');
    notes.innerText = el.note;

    modal.append(img,notes);
    blog_modal.style.display = 'block';
}

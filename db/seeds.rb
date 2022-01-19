# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "🌱 Seeding spices..."

websites = Website.create([
  {
    site_name: "FantasyPros",
    site_url: "https://www.fantasypros.com/",
    subscription_page_url: "https://secure.fantasypros.com/plans/",
    image_url: "https://cdn.fantasypros.com/assets/images/app-promote/myplaybook/mpb_nfl_icon.svg",
    features: "Fantasy Pros is a truly unique offering in a market filled with numerous similar sites.  FantasyPros aggregates experts rankings from all over the industry.  This aggregated data is then used as the basis for several really slick tools to help you with your draft, waiver wire and weekly lineup’s. As a bonus, they also rate the accuracy of all the ranking experts so you can know who really knows their stuff.  Mostly free, but the My Playbook feature is worth every penny.",
    paid_content: true,
    free_content: true,
    football: true,
    baseball: true,
    basketball: true,
    hockey: false
  },
  {
    site_name:"Fantasy Sharks",
    site_url: "https://www.fantasysharks.com/membership-comparison/",
    subscription_page_url: "https://secure.fantasypros.com/plans/",
    image_url: "http://www.fantasysharks.com/wp-content/uploads/2015/03/logo.jpg",
    features: "Another one of the most respected sites in the fantasy industry,  offering a wide range of fantasy football content; Draft and lineup tools, projections, rankings, and an active message board called the Shark Tank.  They also produce a daily newsletter that is well worth signing up for.",
    paid_content: true,
    free_content: true,
    football: true,
    baseball: false,
    basketball: false,
    hockey: false
  },
  {
    site_name: "The Fantasy Footballers",
    site_url: "https://www.thefantasyfootballers.com/fantasy-football-draft-kit/",
    subscription_page_url: "https://www.patreon.com/thefantasyfootballers?=jointhefoot",
    image_url: "https://www.cheatsheetwarroom.com/blog/wp-content/uploads/2018/12/fantasy-footballers-logo.gif",
    features: "What started as a podcast has developed into one of the best redraft fantasy sites on the web. Entertaining, educational, and informative, Andy, Mike, and Jason always make it worth your time.",
    paid_content: true,
    free_content: true,
    football: true,
    baseball: false,
    basketball: false,
    hockey: false
  },
  {
    site_name: "NBC Sports Edge",
    site_url: "https://www.nbcsportsedge.com/",
    subscription_page_url: "https://edge-plus.nbcsportsedge.com/pricing",
    image_url: "https://play-lh.googleusercontent.com/lmMRbNy7Z6eBS7XeQ0408kpmeWfIkI7AyEdVNeJNOWQtr-_Rn4rmyyQ-HWhgO4CWiqkG",
    features: "Another one of the largest fantasy sites around.  They deal with way more than just fantasy football, but their fantasy football content is among the best.  Their daily news feed and player profiles can’t be beat. Be sure to check out their app for iPhone and Android.",
    paid_content: true,
    free_content: true,
    football: true,
    baseball: true,
    basketball: true,
    hockey: true
  },
  {
    site_name: "4for4",
    site_url: "https://www.4for4.com/",
    subscription_page_url: "https://www.4for4.com/plans",
    image_url: "https://pbs.twimg.com/profile_images/1388501287742869516/YE0ENdI4_400x400.jpg",
    features: "A high quality site with a ton of good info, both free and subscription, 4for4 is known for their highly accurate in-season & redraft rankings.  They have proven their ranking prowess by winning numerous accuracy contests. They also offer some fantastic DFS tools to help you make the most out of your money.",
    paid_content: true,
    free_content: true,
    football: true,
    baseball: false,
    basketball: false,
    hockey: false
  },
  {
   site_name: "Action Network",
   site_url: "https://www.actionnetwork.com/fantasy-football",
   subscription_page_url: "https://www.actionnetwork.com/pricing?intcmp=NavBarLoggedOut&src_brand=actionnetwork",
   image_url: "https://images.actionnetwork.com/1200x675/blog/2021/02/ActionLogo1200x675.jpg",
   features: "Covering everything from redraft, to DFS, to dynasty, complete with rankings, tools, and articles. They also have a journalistic feel to their articles, offering a fresh perspective.",
   paid_content: true,
   free_content: true,
   football: true,
   baseball: false,
   basketball: false,
   hockey: false
  },
  {
    site_name: "SleeperU",
    site_url: "https://sleeperu.com/",
    subscription_page_url: "https://sleeperu.com/buy/",
    image_url: "https://ih1.redbubble.net/image.458482777.9118/flat,750x,075,f-pad,750x1000,f8f8f8.u3.jpg",
    paid_content: true,
    free_content: true,
    football: true,
    baseball: false,
    basketball: false,
    hockey: false
  },
  {
    site_name: "RotoWire",
    site_url: "https://www.rotowire.com/",
    subscription_page_url: "https://www.rotowire.com/subscribe/rates.php",
    image_url: "https://pbs.twimg.com/profile_images/1282766959352991744/nIvFhchM_400x400.jpg",
    features: "A large fantasy site with tons of good content. Mostly subscription, covering a lot of sports, worth checking out.  They also have a very good football news ticker.",
    paid_content: true,
    free_content: true,
    football: true,
    baseball: true,
    basketball: true,
    hockey: true
  },
  {
    site_name: "The Athletic",
    site_url: "https://theathletic.com/",
    subscription_page_url: "https://theathletic.com/checkout2/introannual33/?checkout_entry_point=universal_nav_CTA",
    image_url: "https://deadline.com/wp-content/uploads/2022/01/The-Athletic-logo.png",
    features: "Offering a wide range of sports content, including NFl and Fantasy Football analysis, The AThletic has rapidly become one of the premier sports news and analysis sites in the industry. The price of admission is well worth the high quality content and excellent content customization capabilities.",
    paid_content: true,
    free_content: false,
    football: true,
    baseball: true,
    basketball: true,
    hockey: false
  },
  {
    site_name: "Full Time Fantasy",
    site_url: "https://fulltimefantasy.com/",
    subscription_page_url: "https://fulltimefantasy.com/subscribe-season-long-2/",
    image_url: "https://www.si.com/.image/t_share/MTY4MDA3MjAyODk5NzY0NDk3/fulltime-fantasy-football-logojpg.jpg",
    features: "Formerly FF Toolbox and Scout Fantasy, now rebranded as Full Time Fantasy, this site is one of the oldest and most respected fantasy resources around. Customized cheat sheets, dynasty rankings, advice, articles aimed at redraft as well as keeper & dynasty.",
    paid_content: true,
    free_content: true,
    football: true,
    baseball: false,
    basketball: false,
    hockey: false
  },
  {
    site_name: "Establish the Run",
    site_url: "https://establishtherun.com/",
    subscription_page_url: "https://establishtherun.com/subscribe/",
    image_url: "https://cdn.establishtherun.com/wp-content/uploads/2019/07/07114155/EstablishTheRun_OnBlack-Copy.jpg",
    features: "Establish The Run is a subscription site created by Evan Silva and Adam Levitan with the goal of giving subscribers the most intelligent football analysis on the internet. Featuring some of the best analysts in the industry, they aim to help their subscribers better understand the NFL, with an emphasis on providing timely and accurate insights that will help subscribers better digest what has happened and predict what will happen next.",
    paid_content: true,
    free_content: false,
    football: true,
    baseball: false,
    basketball: true,
    hockey: false
  },
  {
    site_name: "numberFire",
    site_url: "https://www.numberfire.com/",
    subscription_page_url: "https://www.numberfire.com/premium/pricing",
    image_url: "https://pbs.twimg.com/profile_images/1302988361100075009/BIka1oy3_400x400.jpg",
    features: "While NumberFire is not strictly speaking a fantasy site – they position themselves as “next generation sports analytics platform” – they do provide a solid some very solid, analytics driven fantasy content. Covering the NFL, NBA, MLB and more, with a range of free and premium tools, projections and services, numberfire is a site you should have on your list of regular visits.",
    paid_content: true,
    free_content: true,
    football: true,
    baseball: true,
    basketball: true,
    hockey: true
  },
  {
    site_name: "Fantasy Points",
    site_url: "https://www.fantasypoints.com/",
    subscription_page_url: "https://www.fantasypoints.com/subscribe",
    image_url: "https://static.fantasypts.com/assets/logos/brand/pin-lg-bg-transparent.svg",
    features: "One of the newer sites on the list, but with some huge names in the industry on their team, you can trust their experience to help you win. Offering season-long, DFS, and sports betting content and tools.",
    paid_content: true,
    free_content: false,
    football: true,
    baseball: false,
    basketball: false,
    hockey: false
  },
  {
    site_name: "Football Guys",
    site_url: "https://www.footballguys.com/",
    subscription_page_url: "https://www.footballguys.com/join#price-tiers",
    image_url: "https://pbs.twimg.com/profile_images/1375454814184878086/u9LtUq8X_400x400.jpg",
    features: "One of the largest, non-major media outlet, best fantasy football sites around.  They provide year round information and analysis. So much in-season content it’s almost overwhelming.  Lots of good writers and some great tools as well, football guys offers mostly free content during the off-season but goes mostly subscription in-season.  Be sure to sign up for their newsletter, it’s an excellent way to stay on top of fantasy football news",
    paid_content: true,
    free_content: true,
    football: true,
    baseball: false,
    basketball: false,
    hockey: false
  },
  {
    site_name: "FFToday",
    site_url: "https://www.fftoday.com/index.html",
    subscription_page_url: "",
    image_url: "https://www.fftoday.com/creative/logo_500_fftoday.png",
    features: "FFToday provides some terrific draft and lineup tools, as well as rankings, analysis and articles on all styles and formats of fantasy leagues.  Sign up for a free membership to get customized player advice.  Another one of the most established and respected sites around.",
    paid_content: false,
    free_content: true,
    football: true,
    baseball: false,
    basketball: false,
    hockey: false
  }
])

u1 = User.create(first_name: "mike", last_name: "toth", username: "natsfan22", email:"mtoth003@gmail.com", image_url: "", password: "password01", admin: true)
u2 = User.create(first_name: "steve", last_name: "williams", username: "swilliams01", email: "swilliams08@gmail.com", image_url: "", password: "password02", admin: false)

ForumPost.create(title: "Fantasy Pros!", content: "Easily the best site, the Draft Wizard is amazing!", like_count: 0, dislike_count: 0, user_id: u1.id)

Review.create(rating: 5, comment: "Amazing site!", user_id: u2.id, website_id: websites.first.id)

puts "✅ Done seeding!"

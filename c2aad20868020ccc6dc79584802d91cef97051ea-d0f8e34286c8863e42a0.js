"use strict";(self.webpackChunkmichaeldemar_co=self.webpackChunkmichaeldemar_co||[]).push([[269],{4204:function(e,t,i){i.d(t,{U:function(){return r}});var a=i(2636),o=i(7153),n={FIRST:1,SECOND:2,THIRD:3,FOURTH:4,FIFTH:5,GRADUATED:6};Object.freeze(n);var r=function(e){switch(e){case n.FIRST:return"first-year";case n.SECOND:return"second-year";case n.THIRD:return"third-year";case n.FOURTH:return"fourth-year";case n.FIFTH:return"fifth-year";case n.GRADUATED:throw new Error("Trying to display graduated value!");default:throw new Error("Cannot convert universityYear "+e+" to string!")}}(function(e){if(void 0===o.f3.find((function(t){return t.id===e})))throw new Error("Could not find UBC in CV!");var t=a.ou.fromISO("2019-09-01"),i=a.ou.fromISO("2024-04-30"),r=a.ou.now();if(r>i)return n.GRADUATED;var s=r.diff(t,"years").toObject().years||0;switch(Math.ceil(s)){case 1:return n.FIRST;case 2:return n.SECOND;case 3:return n.THIRD;case 4:return n.FOURTH;case 5:return n.FIFTH;default:return n.GRADUATED}}("ubc"))},7153:function(e){e.exports=JSON.parse('{"kw":[{"id":"bitgo","organization":"BitGo","position":"Software Engineer Intern (Incoming)","location":"Palo Alto, California","website":"https://bitgo.com","startDate":"Sep 2022","endDate":"Dec 2022","summary":"Software engineer intern for the fall 2022 cycle.","highlights":["Advancing BitGo\'s asset platform on the decentralized finance team."],"technologies":["TypeScript","React","Go","Docker","Kubernetes"]},{"id":"amazon","organization":"Amazon","position":"Software Engineer Intern","location":"Toronto, Ontario","website":"https://amazon.jobs/en/teams/scot","startDate":"May 2022","endDate":"Aug 2022","summary":"Software engineer intern for the summer 2022 cycle.","highlights":["Enhancing vendor onboarding experiences with React and TypeScript."],"technologies":["TypeScript","Java","React","Spring","Docker","Kubernetes"]},{"id":"ubc-ta","organization":"University of British Columbia","position":"Undergraduate Teaching Assistant","location":"Vancouver, British Columbia","website":"https://cs.ubc.ca","startDate":"Jan 2020","endDate":"Apr 2022","summary":"Teaching assistant for seven courses in two years, ranging from data science to computer systems.","highlights":["Earned 100% favorable rating from 100+ students in previous semester.","Taught six unique courses using Racket, Python, R, C, and C++.","Refined instruction materials across 9+ lab sections led."],"technologies":["Python","C","Assembly","C++","R","Racket"]},{"id":"samsung","organization":"Samsung Electronics","position":"Software Engineer Intern","location":"Vancouver, British Columbia","website":"https://samsungknox.com","startDate":"Jan 2021","endDate":"Aug 2021","summary":"Engineer on the Samsung Knox B2B team where I helped rewrite legacy applications and create new services from scratch.","highlights":["Migrated monolith to service-oriented architecture with React and Node.","Created Node service to transform data from an ETL pipeline and Kafka event stream into analytics rendered on React dashboard.","Refactored MongoDB queries to improve performance by up to 50%."],"technologies":["JavaScript","React","Node","Fastify","Hapi","Unit Testing","Docker","Kubernetes","Bash","MongoDB","Java","CSS"]},{"id":"artesian","organization":"General Genomics","position":"Software Engineer Intern","location":"Calgary, Alberta","website":"https://curo46.com","startDate":"May 2020","endDate":"Aug 2020","summary":"Engineer at small consulting firm where I helped created a fullstack COVID-19 related web application from scratch in 3 months.","highlights":["Implemented Node services to process over $50,000+ in transactions via Stripe, manage survey data, and interface with PostgreSQL.","Created, styled, and tested React components with Sass and Jest.","Developed COVID-19 related app from scratch in 3 months which attracted early investment from Reno Chamber of Commerce, among others."],"technologies":["JavaScript","React","Node","PostgreSQL","DynamoDB","AWS","SCSS","Docker"]},{"id":"ubc-varsity","organization":"University of British Columbia","position":"Varsity Event Staff","location":"Vancouver, British Columbia","website":"https://gothunderbirds.ca","startDate":"Aug 2019","endDate":"Jul 2020","summary":"Supported varsity athletics events throughout the academic year at UBC.","highlights":["Worked in numerous roles to facilitate the successful execution of 50+ varsity athletics events hosting up to 1,000 students each.","Created welcoming environment for fans of the sport and communicated effectively with team leads to ensure events ran smoothly."],"technologies":[]},{"id":"sunia","organization":"Seminar on the United Nations and International Affairs (SUNIA)","position":"Chief Technology Officer & Registrar","location":"Vancouver, British Columbia","website":"https://sunia.ca","startDate":"Jan 2018","endDate":"Oct 2020","summary":"Co-directed a non-profit summer program in Alberta\'s Rocky Mountains focused on the United Nations and international conflicts.","highlights":["Utilized TypeScript, Python, and Google Sheets backend to create novel system for contacting and sorting 150+ registrants, saving 20+ hours of work annually.","Delivered educational content related to international affairs and the UN’s sustainable development goals.","Coordinated and executed promotional strategy with team of fourteen across Canada. Worked with digital marketing tools such as Buffer, AdWords, and Facebook Ads.","Assisted in numerous portfolios pertaining to the education of youth in Alberta on international affairs and sustainable development."],"technologies":["Python","TypeScript","Clasp by Google"]},{"id":"ubc-ece","organization":"UBC Electrical and Computer Engineering","position":"Undergraduate Academic Assistant","location":"Vancouver, British Columbia","website":"https://cs.ubc.ca","startDate":"Jan 2020","endDate":"present","summary":"Assisted UBC\'s ECE department with navigating online learning and website overhaul.","highlights":["Migrated legacy Drupal site to WordPress, improving site responsiveness and aesthetic using HTML, CSS, and JavaScript.","Developed Python script to gather department research data to be displayed on the new website.","Conducted interviews and wrote blog posts about the latest research being done."],"technologies":["Python","HTML","CSS","JavaScript"]},{"id":"metro","organization":"Metro Continuing Education","position":"Program Coordinator","location":"Edmonton, Alberta","website":"https://metrocontinuingeducation.ca","startDate":"Aug 2017","endDate":"Jul 2019","summary":"Ran non-profit summer camps on programming for children of families who were new to Canada.","highlights":["While parents attended English classes at Metro, ran day camps for immigrant children at no cost to parents to make class accessible.","Ran week-long summer camps teaching children aged 8 to 11 how to program basic 3D games in Unity. Delivered curriculum produced by Black Rocket Productions."],"technologies":[]},{"id":"epl","organization":"Edmonton Public Library","position":"Student Page","location":"Edmonton, Alberta","website":"https://epl.ca","startDate":"Apr 2016","endDate":"Apr 2017","summary":"Facilitated atmosphere at Idylwylde of EPL, ensuring returned books made it to shelves in a timely fashion and library was kept clean.","highlights":["Facilitated atmosphere at Idylwylde of EPL, ensuring returned books made it to shelves in a timely fashion and library was kept clean."],"technologies":[]},{"id":"referee","organization":"Canada Soccer","position":"Soccer Referee","location":"Edmonton, Alberta","website":"https://canadasoccer.com/","startDate":"Jun 2015","endDate":"Aug 2018","summary":"Officiated games for both youth and teenage players, at all levels of competition.","highlights":["Officiated games for both youth and teenage players, at all levels of competition."],"technologies":[]}],"q":[{"id":"credit-card","name":"Predicting Defaults","position":"Data Scientist","location":"Vancouver, British Columbia","website":"https://michaeldemar.co/projects/predicting-defaults","github":"https://github.com/michaelfromyeg/credit-card-defaults","date":"Nov 2022","summary":"predicting credit card defaults using machine learning","highlights":["Tuned LightGBM model with Python to 0.82 accuracy and 0.38 recall.","Conducted feature engineering and extracted feature importance."]},{"id":"wenote","name":"weNote","position":"Founder","location":"Edmonton, Alberta","website":"https://wenote.ca","github":"https://github.com/michaelfromyeg/weNote","date":"Jul 2021","summary":"a start-up focused on enhancing collaborative learning","highlights":["Founded start-up that allows students to build lecture notes collaboratively.","Utilized React, Node, and Firebase to create MVP in 3 months."]},{"id":"jobs-notify","name":"Jobs Notify","position":"Software Engineer","location":"Vancouver, British Columbia","website":"https://github.com/michaelfromyeg/jobs-notify","github":"https://github.com/michaelfromyeg/jobs-notify","date":"Jul 2021","summary":"be the first to apply to software internships","highlights":["Created e-mail newsletter which scrapes online job boards and hydrates HTML template.","Leveraged AWS SES and SNS to allow users to customize when emails are received."]},{"id":"mystatements","name":"mystatements","position":"Software Engineer","location":"Vancouver, British Columbia","website":"https://github.com/michaelfromyeg/mystatements","github":"https://github.com/michaelfromyeg/mystatements","date":"Jul 2021","summary":"become the true owner of your financial history","highlights":["Developed Python script to turn PDF financial statements into CSV format for personal use.","Enabled data visualization using plotly."]},{"id":"cvc","name":"cvc","position":"Software Engineer","location":"Vancouver, British Columbia","website":"https://github.com/michaelfromyeg/vcv","github":"https://github.com/michaelfromyeg/vcv","date":"Jul 2021","summary":"manage your resume with the power of git","highlights":["Created tool with Python to allow users to template resume and tailor to job descriptions."]},{"id":"course-compare","name":"Course Compare","position":"Software Engineer","location":"Vancouver, British Columbia","website":"https://github.com/michaelfromyeg/course-compare","github":"https://github.com/michaelfromyeg/course-compare","date":"Jul 2021","summary":"compare classes with your peers without the headache","highlights":["Developed Python backend to parse .ical files and find overlap in schedules.","Received overwhelmingly positive feedback in \'family and friends\' release."]},{"id":"covid-on-crime","name":"COVID-19 and Crime","position":"Data Scientist","location":"Vancouver, British Columbia","website":"https://adammitha.com/STAT201-group-project/","github":"https://github.com/adammitha/STAT201-group-project","date":"Jan 2021","summary":"performing statistical inference on open crime data","highlights":["Examined relationship between COVID-19 and petty crime with R.","Simulated sampling distribution via bootstrapping with open data set."]},{"id":"gol","name":"Conway\'s Game of Life","position":"Software Engineer","location":"Vancouver, British Columbia","website":"https://github.com/michaelfromyeg/conway-gol","github":"https://github.com/michaelfromyeg/conway-gol","date":"Feb 2021","summary":"in tribute to Conway, an animation of his Game of Life with Python","highlights":["Developed simulation of Conway\'s Game of Life using Python.","Introduced game interaction, allowing users to experiment with different starts."]},{"id":"showrooms","name":"Showrooms","position":"Software Engineer","location":"Vancouver, British Columbia","website":"https://bestbuyshow.space","github":"https://github.com/michaelfromyeg/showrooms","date":"Jan 2021","summary":"show off your desktop setup and make money from it","highlights":["Co-created app with React and Node to allow users to share desk setups.","Earned 3rd overall prize at BizHacks 2021 against 50+ teams."]},{"id":"pd","name":"Parkinson\'s Prediction","position":"Data Scientist","location":"Vancouver, British Columbia","website":"https://michaelfromyeg.github.io/pd-classification","github":"https://github.com/michaelfromyeg/pd-classification","date":"Jan 2021","summary":"detect Parkinson\'s disease from speech data","highlights":["Co-wrote report with R to predict Parkinson\'s from a patient\'s speech data.","Achieved 80% accuracy with K-Nearest Neighbors algorithm."]},{"id":"grouber","name":"groUber","position":"Software Engineer","location":"Vancouver, British Columbia","website":"https://grouber.online","github":"https://github.com/michaelfromyeg/groUber","date":"Jun 2020","summary":"ride-sharing for you and your friends","highlights":["Built app to enable groups to carpool using React, Node, and Firebase.","Implemented novel algorithm with Java to create efficient car routes."]},{"id":"vscode-puzzles","name":"Visual Studio Code Puzzles","position":"Software Engineer","location":"Vancouver, British Columbia","website":"https://marketplace.visualstudio.com/items?itemName=michaelfromyeg.vscode-puzzle","github":"https://github.com/michaelfromyeg/vscode-puzzles","date":"Jun 2020","summary":"simplify technical interview problem practice","highlights":["Built tool to bring interview \\"puzzles\\" into an IDE using TypeScript.","Won Microsoft\'s \\"Best Use of External API\\" award and has 165+ users."]},{"id":"jcite","name":"jCite","position":"Software Engineer","location":"Vancouver, British Columbia","website":"https://michaeldemar.co/projects/jcite","github":"https://github.com/michaelfromyeg/jCite","date":"Apr 2020","summary":"manage research papers and generate citations","highlights":["Developed desktop app using Java to help scholars manage research.","Achieved 100% code coverage in JUnit to prevent future regressions."]},{"id":"nominatr","name":"Nominatr","position":"Software Engineer","location":"Vancouver, British Columbia","website":"https://michaeldemar.co/projects/nominatr","github":"https://github.com/michaelfromyeg/nominatr","date":"Mar 2020","summary":"facilitate paperless nominations for student elections","highlights":["Built tool to comb survey data and send bulk emails using Java and AWS.","Sent 500+ emails in production saving 20+ hours of work for election team."]},{"id":"michaeldemar.co","name":"michaeldemar.co","position":"Software Engineer","location":"Vancouver, British Columbia","website":"https://michaeldemar.co","github":"https://github.com/michaelfromyeg/michaeldemar.co","date":"Apr 2019","summary":"a personal website with a ton of bells and whistles!","highlights":["Created personal website using Gatsby (React, TypeScript) and Sass.","Earned 1,000+ users and 2,000+ unique sessions since launch."]},{"id":"rapviz","name":"RapViz","position":"Software Engineer","location":"Vancouver, British Columbia","website":"https://rapviz.appspot.com","github":"https://github.com/michaelfromyeg/RapViz","date":"Mar 2019","summary":"visualize \'bars\' right in the browser","highlights":["Built app to visualize rhyme schemes in rap using React, Flask, and GCP.","Earned finalist distinction in the Entertainment Track at HackTech 2019."]},{"id":"ackleast","name":"ACKLeast","position":"Software Engineer","location":"Edmonton, Alberta","website":"https://github.com/suniacamp/ackleast","github":"https://github.com/suniacamp/ackleast","date":"Jul 2019","summary":"sort camp participants into groups using a novel algorithm","highlights":["Developed novel Python algorithm to sort students in groups abiding business logic.","Saved staff registrar estimated 20+ hours of work, manually processing students."]}],"y$":[{"id":"fiji-philanthropy","organization":"Phi Gamma Delta","position":"Philanthropy Chairman","location":"Vancouver, British Columbia","website":"https://ubcfiji.com","startDate":"Jan 2022","endDate":"present","summary":"Spearheaded philanthropic events to support various charities and the local community.","highlights":["Led beach clean-up with over 30+ volunteers whiched cleaned 15kg of trash from ~3km of beach.","Co-hosted Valentine\'s Day fundraiser which yielded $2,000 for Convenant House Vancouver."],"skills":["Leadership","Service","Event Planning"]},{"id":"ams-food-bank","organization":"AMS of UBC Vancouver","position":"Food Bank Volunteer","location":"Vancouver, British Columbia","website":"https://ams.ubc.ca/","startDate":"May 2021","endDate":"Apr 2022","summary":"Served numerous students, faculty, and staff at the AMS Food Bank.","highlights":["Served numerous UBC students, faculty, and staff at the food bank, ensuring discretion and providing timely service."],"skills":["Volunteering","Organization","Service"]},{"id":"fiji-scholarship","organization":"Phi Gamma Delta","position":"Scholarship Chairman","location":"Vancouver, British Columbia","website":"https://ubcfiji.com","startDate":"Jan 2020","endDate":"Dec 2021","summary":"Supporting undergraduate chapter with all aspects of their education.","highlights":["Provided chapter with educational resources, gave study tips, and managed chapter house study room.","Developed internal tool to allow members to share which courses they had taken and rate them."]},{"id":"sus-atp","organization":"The Science Undergraduate Society","position":"Assistant to the President (ATP)","location":"Vancouver, British Columbia","website":"https://sus.ubc.ca","startDate":"May 2021","endDate":"Dec 2021","summary":"Supported the mission and mandate of the Science Undergraduate Society on the Presidential Portfolio.","highlights":["Served on both First Week and BIPOC working groups to support Science students at UBC."]},{"id":"tci-rnd","organization":"The C.O.D.E. Initiative","position":"Research and Design","location":"Vancouver, British Columbia","website":"https://thecodeinitiative.ca","startDate":"Mar 2021","endDate":"Sep 2021","summary":"Developing a computer science curriculum for neurodiverse adults.","highlights":["Consulted with industry experts to gauge appropriate content for neurodiverse adult CS education."]},{"id":"mlh-workshops","organization":"Major League Hacking","position":"Workshop Lead (3x)","location":"Remote","website":"https://mlh.io","startDate":"Sep 2020","endDate":"present","summary":"Led workshops on data science and web development at hackathons across North America.","highlights":["Led three workshops with 100+ attendees and 300+ views on YouTube.","Developed engaging delivery style that actively involves participants."],"skills":["Leadership","Service","Event Planning"]},{"id":"sus-ea","organization":"The Science Undergraduate Society","position":"Elections Administrator","location":"Vancouver, British Columbia","website":"https://sus.ubc.ca","startDate":"May 2020","endDate":"Apr 2021","summary":"Facilitated first-ever completely virtual student election.","highlights":["Hosted events to reduce apathy; saw +3.1% votes relative to previous year.","Developed tool to facilitate nominees and nominators using Java, the Qualtrics API, and Freemarker.","Coordinated All-Candidates Meeting and Candidates\' Forum, receiving unanimously positive feedback from candidates regarding both events."]},{"id":"nwplus","organization":"nwPlus","position":"Software Developer","location":"Vancouver, British Columbia","website":"http://nwplus.io","startDate":"May 2020","endDate":"Apr 2021","summary":"Assisted with creating website and resources behind three flagship hack-a-thon events at UBC.","highlights":["Assisted with creating website and resources behind three flagship hack-a-thon events at UBC."]},{"id":"tci-volunteer","organization":"The C.O.D.E. Initiative","position":"Program Volunteer","location":"Vancouver, British Columbia","website":"https://thecodeinitiative.ca","startDate":"Feb 2020","endDate":"Mar 2020","summary":"Assisted in delivering introductory computer science concepts to elementary school aged children through the Sphero robot. ","highlights":["Assisted in delivering introductory computer science concepts to elementary school aged children through the Sphero robot."]},{"id":"ctc","organization":"Code The Change Foundation","position":"Back End Developer","location":"Vancouver, British Columbia","website":"http://codethechange.ca","startDate":"Sep 2019","endDate":"Apr 2020","summary":"Served as a student developer on a project team to create a volunteer management tool for a local nonprofit.","highlights":["Developed a web application for a local non-profit to manage network of 1000+ volunteers along with a team of five other upper year students.","Created RESTful API using Azure functions and Node, built React components, wrote queries for MSSQL database, conducted code review, and created documentation to transfer completed project to client."]},{"id":"sus-fyc","organization":"The Science Undergraduate Society","position":"First Year Committee Member","location":"Vancouver, British Columbia","website":"https://sus.ubc.ca","startDate":"Sep 2019","endDate":"Apr 2020","summary":"Coordinated events and advocacy campaigns to support the first-year experience of UBC Science students.","highlights":["Coordinated events which sought to improve the experience of a first-year student in the Faculty of Science at UBC.","Created digital marketing content for annual dance which sold out two weeks early and was the first profitable event in the history of the society.","Led logistics committee for community event in which our committee served hot chocolate to over 300+ UBC students and staff.","Assisted with marketing for other events through creation of blurbs and graphics, and distributed them via a variety of digital channels."]},{"id":"ocra","organization":"Orchard Commons Residence Association","position":"Branch President","location":"Vancouver, British Columbia","website":"https://vancouver.housing.ubc.ca/residences/orchard-commons/","startDate":"Sep 2019","endDate":"Apr 2020","summary":"Supported for the first-year experience for my floor mates as Branch President in Orchard Commons at UBC.","highlights":["Directed events with the goal of improving first-year experience in residence.","Distributed promotional materials, organized logistics, and created welcoming and inclusive environment."]},{"id":"ceyc","organization":"City of Edmonton","position":"Youth Councillor","location":"Edmonton, Alberta","website":"https://ceyc.ca/","startDate":"Aug 2018","endDate":"Aug 2019","summary":"Served on the City of Edmonton\'s Youth Council for one-term, supporting Urban & Regional Planning within the city.","highlights":["Provided meaningful input to our municipal government and took action on local issues.","Acted as member of the Urban & Regional Planning Committee."]},{"id":"student-senate","organization":"Edmonton Public Schools (EPSB)","position":"Student Senator","location":"Edmonton, Alberta","website":"https://sites.google.com/epsb.ca/studentsenate","startDate":"Sep 2017","endDate":"Jun 2019","summary":"Served on EPSB Student Senate for two-terms, as a general member and Vice-Chair respectively, pursuing issues that mattered to students district-wide.","highlights":["Served on EPSB Student Senate for two-terms, engaging students across the district on issues that mattered to them, and pursuing project work based on their insight.","Responsible for graphic design of time management themed brochures in first-year. Assisted with senate proceedings in second-year as vice-chair."]}],"f3":[{"id":"ubc","institution":"University of British Columbia","degree":"B.Sc. Honours Computer Science (Co-op), minor in Data Science","location":"Vancouver, British Columbia","website":"https://cs.ubc.ca","startDate":"Sep 2019","endDate":"Apr 2024","gpa":"4.33 (94%)","courses":["Data Structures and Algorithms (96%)","Computer Systems (95%)","Software Construction (95%)"]},{"id":"ib","institution":"McNally Composite High School","degree":"International Baccalaureate","location":"Edmonton, Alberta","website":"https://mcnally.epsb.ca","startDate":"Sep 2016","endDate":"Jun 2019","gpa":"41/45 (IB) / 98% (Alberta Education)","courses":["History HL (7)","Chemistry HL (7)","English HL (7)","Math SL (7)","French SL (5)","Physics SL (7)","Computer Science SL (6)"]}]}')}}]);
//# sourceMappingURL=c2aad20868020ccc6dc79584802d91cef97051ea-d0f8e34286c8863e42a0.js.map
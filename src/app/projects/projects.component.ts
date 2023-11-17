import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  universityData:any[]=[
    {
      title:'Agri Grow (Final Year Project)',
      duration:'2022 - 2023',
      description:'Agri Grow is an online marketplace which provides business opportunities for farmers to grow their businesses efficiently.It also helps the farmers to solve their problems with the consultancy of agricultural experts.',
      company:'FAST NUCES CFD Campus',
      link:''
    },
    {
      title:'Laboratory Management System',
      duration:'2019',
      description:'The stock management software generate stock reports, sales reports, payment reports all types of reports which are necessary for mange our stock will generate in this system using ASP.NET, SQL Management studio,C#.',
      company:'FAST NUCES CFD Campus',
      link:''
    },
    {
      title:'Visualization of Data Structure',
      duration:'2020',
      description:'Visualization of Data Structures Algorithms using SFML.',
      company:'FAST NUCES CFD Campus',
      link:''
    },
    {
      title:'Penny Saver',
      duration:'2023',
      description:'Penny Saver is a mobile application that helps users keep track of their expenses. It allows users to record their daily expenses and categorize them into different categories, such as food, transportation, and entertainment. The app provides users with detailed reports and visualizations of their spending habits, including charts.',
      company:'FAST NUCES CFD Campus',
      link:' https://github.com/ShehrozMalik665/React-Native-Penny-Saver'
    },
    {
      title:'Quizzler',
      duration:'2023',
      description:'Quizzler is a mobile application that allows users to play various types of quizzes on their mobile devices. The app usually offers a wide range of quiz topics and categories, including general knowledge, sports, music, history, and more. Users can select the type of quiz they want to play and answer a series of multiple-choice questions.',
      company:'FAST NUCES CFD Campus',
      link:'https://github.com/ShehrozMalik665/React-Native-Quiz-App-Quizzler'
    },
    
  ];
  professionalData:any[]=[
    {
      title:'AI Upwork Proposal Generator Bot',
      duration:'2023',
      description:'An AI-powered Upwork proposal bot for freelancers to effortlessly generate winning project proposals. The AI Upwork Proposal Generator Bot is a powerful Chrome extension designed to assist freelancers in crafting compelling proposals on the Upwork platform. Leveraging the capabilities of artificial intelligence, this extension generates customized proposals by analysing job descriptions and generating relevant proposal content. The extension utilizes advanced natural language processing and machine learning algorithms to analyse key details from the job description, such as required skills, project scope, and client expectations. Based on this analysis, the bot generates a persuasive proposal that highlights the freelancers relevant experience, skills, and abilities.Key features of the AI Upwork Proposal Generator are Proposal Customization, Efficiency and Time-saving, Quality and Relevance, Language Enhancement.',
      link:'https://chromewebstore.google.com/detail/ai-upwork-proposal-genera/ebohhakmmbhflceobapjonihadpbmiee',
      company:'TGI Pakistan',
    },
  ];
}

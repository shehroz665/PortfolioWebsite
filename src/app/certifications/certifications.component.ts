import { Component } from '@angular/core';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent {
  data:any[]=[
    {id:1,title:'.NET Web API',description:'The ASP.NET Core Web API certification imparts a thorough grasp of constructing robust web APIs with ASP.NET Core. It equips professionals to design, develop, and deploy high-performance APIs, enhancing expertise in modern web applications.',url:'https://www.mindluster.com/storage/cer/13204014342.jpg'},
    {id:2,title:'Fundamentals of C#',description:'The Fundamentals of C# certification provides essential skills for efficient software development with the C# programming language, making it an ideal entry point for beginners in C# programming.',url:'https://10pearlsuniversity.org/wp-content/uploads/certificates/10PUC-1fbc1530712fddc42cd3f156dc61ad3da19bec088edcc4af257041919.png'},
  ];
}

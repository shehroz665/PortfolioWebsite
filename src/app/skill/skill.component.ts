import { Component } from '@angular/core';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { faCode ,faServer} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent {
  sizeIcon: SizeProp = '1x';
  data:any[]= [
    {
      title:'Frontend Developer ',
      icon:faCode,
      isExpand:false,
      child:[
        {
          lang:'HTML',efficency:90,type:'success'
        },
        {
          lang:'CSS',efficency:90,type:'success'
        },
        {
          lang:'React',efficency:70,type:'warning'
        },
        {
          lang:'Angular',efficency:90,type:'success'
        },
        {
          lang:'Vue.js',efficency:50,type:'info'
        },
      ]
    },
    {
      title:'Backend Developer ',
      icon:faServer,
      isExpand:false,
      child:[
        {
          lang:'C#',efficency:80,type:'success'
        },
        {
          lang:'.Net',efficency:80,type:'success'
        },
        {
          lang:'PHP',efficency:60,type:'warning'
        },
        {
          lang:'Laravel',efficency:90,type:'success'
        },
      ]
    }
  ];
}

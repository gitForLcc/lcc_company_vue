
import Ctop from './components/content/Ctop.vue'
import Course from './components/content/Course.vue'
import Job from './components/content/Job.vue'
import Ctf from './components/content/Ctf.vue'
import Target from './components/content/Target.vue'
import Tool from './components/content/Tool.vue'
import Person from './components/content/Person.vue' 

import TMain from './components/content/tool/Tmain.vue'
import CMain from './components/content/ctf/Cmain.vue'
import CourMain from './components/content/course/CourMain.vue'
import JMain from './components/content/job/JMain.vue'

import PCenter from './components/content/person/PCenter.vue'
import PInfo from './components/content/person/PInfo.vue'
import PRank from './components/content/person/PRank.vue'
import PTask from './components/content/person/PTask.vue'
import PExam from './components/content/person/PExam.vue'

export default[
	{
		path:'/home',
		component:Ctop
	},
	{
		path:'/courses',
		component:Course,
		children:[
			{
				path:'course/:id/:nid',
				component:CourMain
			}
		]
	},
	{
		path:'/jobs',
		component:Job,
		children:[
			{
				path:'job/:id/:nid',
				component:JMain
			}
		]
	},
	{
		path:'/ctf',
		component:Ctf,
		children:[
			{
				path:'lesson/:id',
				component:CMain
			}
		]
	},
	{
		path:'/targets',
		component:Target
	},
	{
		path:'/tools',
		component:Tool,
		children:[
			{
				path:'tool/:id',
				component:TMain
			}
		]
	},
	{
		path:'/persons',
		component:Person,
		children:[
			{
				path:'center',
				component:PCenter
			},
			{
				path:'rank',
				component:PRank
			},
			{
				path:'task',
				component:PTask
			},
			{
				path:'info',
				component:PInfo
			},
			{
				path:'exam',
				component:PExam
			}
		]
	},
	{
		path:'/',
		redirect:'/home'
	},
	{
		path:'*',
		redirect:'/home'   //404
	}
]
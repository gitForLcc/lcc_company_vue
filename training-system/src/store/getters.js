export default{
	baseUrl:()=>{
		return 'http://104.199.220.184'
	},
	mainShow:(state)=>{
		return state.main;
	},
	courseShow:(state)=>{
		return state.course;
	},
	jobShow:(state)=>{
		return state.job;
	},
	ctfShow:(state)=>{
		return state.ctf;
	},
	targetShow:(state)=>{
		return state.target;
	},
	toolShow:(state)=>{
		return state.tool;
	},
	personShow:(state)=>{
		return state.person;
	},
	TToolsShow:(state)=>{
		return state.TShowTools;
	},
	CCtfShow:(state)=>{
		return state.CShowCtf;
	},
	CCourseShow:(state)=>{
		return state.CShowCourse;
	},
	JJobShow:(state)=>{
		return state.JShowJob;
	},
	PPersonShow:(state)=>{
		return state.PShowPerson;
	},
	CfooterShow:(state)=>{
		return state.CShowFooter;
	}
}
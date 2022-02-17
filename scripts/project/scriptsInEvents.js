


const scriptsInEvents = {

		async ["Moeda-Moeda_Event4_Act1"](runtime, localVars)
		{
			runtime.globalVars.Alt1=0;
			runtime.globalVars.Alt2=0;
			runtime.globalVars.Alt3=0;
			
			while(runtime.globalVars.Alt1==runtime.globalVars.Alt2 || runtime.globalVars.Alt1==runtime.globalVars.Alt3 || runtime.globalVars.Alt1==0)
			{
				runtime.globalVars.Alt1 = Math.floor(Math.random() * 3) + 1;
			}
			
			while(runtime.globalVars.Alt2==runtime.globalVars.Alt1 || runtime.globalVars.Alt2==runtime.globalVars.Alt3 || runtime.globalVars.Alt2==0)
			{
				runtime.globalVars.Alt2 = Math.floor(Math.random() * 3) + 1;
			}
			
			while(runtime.globalVars.Alt3==runtime.globalVars.Alt2 || runtime.globalVars.Alt3==runtime.globalVars.Alt1 || runtime.globalVars.Alt3==0)
			{
				runtime.globalVars.Alt3 = Math.floor(Math.random() * 3) + 1;
			}
		}

};

self.C3.ScriptsInEvents = scriptsInEvents;


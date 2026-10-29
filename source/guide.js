async function portfolioReply(_,options){const q=JSON.parse(options.body).messages.at(-1).content.toLowerCase();let effect=null,text='I’m Yash’s local portfolio guide. Ask about projects, experience, education, skills, or contact details. You can also ask for snow, rain, balloons, bubbles, lanterns, confetti, a pet, music, or a layout effect.';
if(/reset|undo|restore|remove.*effect/.test(q)){effect={effect:'reset'};text='Restored the original page.'}
else if(/snow|rain/.test(q)){effect={effect:'weather',kind:q.includes('snow')?'snow':'rain'};text='Weather is on.'}
else if(/confetti/.test(q)){effect={effect:'confetti'};text='Move your mouse around the page!'}
else if(/\b(pets?|ducks?|cats?|dogs?|turtles?)\b/.test(q)){effect={effect:'pet',species:['duck','cat','dog','turtle'].find(x=>new RegExp('\\b'+x+'s?\\b').test(q))||'duck'};text='Your little companion has arrived.'}
else if(/balloon|bubble|lantern/.test(q)){effect={effect:q.includes('balloon')?'balloons':q.includes('bubble')?'bubbles':'lanterns'};text='Enjoy!'}
else if(/night|flashlight|lights/.test(q)){effect={effect:'night',radius:180};text='Lights out — move your flashlight around.'}
else if(/gravity|float everything/.test(q)){effect={effect:'gravity'};text='Gravity has changed.'}
else if(/comic|font/.test(q)){effect={effect:'font',targets:'all',mode:'comic'};text='Font changed.'}
else if(/teal|recolou?r/.test(q)){effect={effect:'palette',mode:'color',targets:'all',color:'#8fb8b0'};text='Palette changed.'}
else if(/\b(music|play|pause)\b/.test(q)){effect={effect:'music'};text='Toggled the background music.'}
else if(/fun|surprise/.test(q)){effect={effect:'balloons'};text='A little surprise for you!'}
else if(/resume/.test(q)){effect={effect:'highlight',target:'resume'};text='The Resume button in About Me opens Yash’s PDF.'}
else if(/contact|reach|email|linkedin/.test(q)){text='Email: yashlalwani.dev@gmail.com\nLinkedIn: https://linkedin.com/in/yashlalwani10\nGitHub: https://github.com/Yash-Lalwani'}
else if(/hack|trialwright|award/.test(q)){text='Yash won 1st Place in the Regeneron Track at HackRU Fall 2026 with TrialWright: a clinical protocol review engine that analyzed 134 pages in 31 seconds, with 9× baseline precision and zero hallucinated citations in evaluation.\nhttps://trialwright.tech'}
else if(/project|astra|plane|rag|newsly|formula|\bf1\b/.test(q)){effect={effect:'scroll',target:'projects'};text='TrialWright reviews clinical protocols. RAG-Engine combines hybrid retrieval and citation verification. Astra audits clinical trials with six specialists. Plane is a project management API. The F1 project models driver–circuit compatibility, and Newsly.AI explores news with sentiment analysis. Explore the project cards for links and the F1 paper.'}
else if(/experience|work|research|pfizer/.test(q)){effect={effect:'scroll',target:'experience'};text='Yash is a Research Assistant in AI & Data Automation at Rutgers Bloustein School (Oct 2025–present) and an AI Document Intelligence Extern through Pfizer Extern (Sep 2026–present).'}
else if(/education|gpa|rutgers|graduate/.test(q)){text='BS in Computer Science, minor in Data Science, Rutgers University–New Brunswick. Expected May 2027. GPA 3.85/4.00; Dean’s List (4×).'}
else if(/skill|language|stack/.test(q)){text='Python, JavaScript, TypeScript, Java, C, SQL; FastAPI, React, Node.js; LangGraph, RAG, MCP, multi-agent systems; PostgreSQL, Redis, Qdrant, Docker and AWS.'}
if(effect && !['reset','scroll'].includes(effect.effect))text+=' Use the Restore button in the chat header to return the page to default.';
let data=effect?'data: '+JSON.stringify({effect})+'\n\n':'';data+='data: '+JSON.stringify({choices:[{delta:{content:text}}]})+'\n\n';return new Response(data,{headers:{'Content-Type':'text/event-stream'}})}

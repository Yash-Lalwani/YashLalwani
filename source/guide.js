async function portfolioReply(_,options){const q=JSON.parse(options.body).messages.at(-1).content.toLowerCase();let effect=null,text='I’m Yash’s local portfolio guide. Ask about projects, experience, education, skills, or contact details. You can also ask for snow, rain, balloons, bubbles, lanterns, confetti, a pet, music, or a layout effect.';
if(/reset|undo|restore|remove.*effect/.test(q)){effect={effect:'reset'};text='Restored the original page.'}
else if(/snow|rain/.test(q)){effect={effect:'weather',kind:q.includes('snow')?'snow':'rain'};text='Weather is on. Use Reset to restore the page.'}
else if(/confetti/.test(q)){effect={effect:'confetti'};text='Move your mouse around the page!'}
else if(/pet|duck|cat|dog|turtle/.test(q)){effect={effect:'pet',species:['duck','cat','dog','turtle'].find(x=>q.includes(x))||'duck'};text='Your little companion has arrived.'}
else if(/balloon|bubble|lantern/.test(q)){effect={effect:q.includes('balloon')?'balloons':q.includes('bubble')?'bubbles':'lanterns'};text='Enjoy! You can reset the effects any time.'}
else if(/night|flashlight|lights/.test(q)){effect={effect:'night',radius:180};text='Lights out — move your flashlight around.'}
else if(/gravity|float everything/.test(q)){effect={effect:'gravity'};text='Gravity has changed. Reset brings everything back.'}
else if(/comic|font/.test(q)){effect={effect:'font',targets:'all',mode:'comic'};text='Font changed. Reset restores the original.'}
else if(/teal|recolou?r/.test(q)){effect={effect:'palette',mode:'color',targets:'all',color:'#8fb8b0'};text='Palette changed. Reset restores the original.'}
else if(/music|play|pause/.test(q)){effect={effect:'music'};text='Toggled the background music.'}
else if(/fun|surprise/.test(q)){effect={effect:'balloons'};text='A little surprise for you!'}
else if(/resume/.test(q)){effect={effect:'highlight',target:'resume'};text='The Resume button in About Me opens Yash’s PDF.'}
else if(/contact|reach|email|linkedin/.test(q)){text='Email: yashlalwani.dev@gmail.com\nLinkedIn: https://linkedin.com/in/yashlalwani10\nGitHub: https://github.com/Yash-Lalwani'}
else if(/hack|trialwright|award/.test(q)){text='Yash won 1st Place in the Regeneron Track at HackRU Fall 2026 with TrialWright: a clinical protocol review engine that analyzed 134 pages in 31 seconds, with 9× baseline precision and zero hallucinated citations in evaluation.\nhttps://trialwright.tech'}
else if(/project|astra|plane|rag/.test(q)){effect={effect:'scroll',target:'projects'};text='RAG-Engine combines hybrid retrieval, reranking and citation verification. Astra uses six parallel specialists to audit clinical trials. Plane is a 47-endpoint multi-tenant project management API. Explore the project cards for links.'}
else if(/experience|work|research|pfizer/.test(q)){effect={effect:'scroll',target:'experience'};text='Yash is a Research Assistant in AI & Data Automation at Rutgers Bloustein School (Oct 2025–present) and an AI Document Intelligence Extern through Pfizer Extern (Sep 2026–present).'}
else if(/education|gpa|rutgers|graduate/.test(q)){text='BS in Computer Science, minor in Data Science, Rutgers University–New Brunswick. Expected May 2027. GPA 3.85/4.00; Dean’s List (4×).'}
else if(/skill|language|stack/.test(q)){text='Python, JavaScript, TypeScript, Java, C, SQL; FastAPI, React, Node.js; LangGraph, RAG, MCP, multi-agent systems; PostgreSQL, Redis, Qdrant, Docker and AWS.'}
let data=effect?'data: '+JSON.stringify({effect})+'\n\n':'';data+='data: '+JSON.stringify({choices:[{delta:{content:text}}]})+'\n\n';return new Response(data,{headers:{'Content-Type':'text/event-stream'}})}

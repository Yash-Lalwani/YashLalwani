from pathlib import Path
from html import escape
p=Path(__file__).resolve().parent.parent/'assets'
for file,label,color in [('rutgers','R','#cc0033'),('pfizer','Pfizer','#0066cc'),('trialwright','TW','#5c7f70')]:
 p.joinpath(file+'.svg').write_text(f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="50" fill="{color}"/><text x="50" y="64" font-family="Georgia" font-weight="bold" font-size="{54 if len(label)<3 else 26}" fill="white" text-anchor="middle">{label}</text></svg>')
for file,title,labels,sub in [('rag','RAG-Engine',['Documents + SQL','Hybrid retrieval','Rerank + verify'],'0.82 Recall@5 · 0.94 faithfulness'),('research','Research & Automation',['Oracle + Access','Python + pandas','Reports + audit'],'1,200+ expenditure rows · 13-sheet workbook'),('document','Document Intelligence',['Pharma documents','OCR + chunking','RAG retrieval'],'Tesseract · PaddleOCR · LlamaIndex')]:
 svg='<svg xmlns="http://www.w3.org/2000/svg" width="900" height="500" viewBox="0 0 900 500"><rect width="900" height="500" fill="#faf6e6"/><path d="M0 35H900" stroke="#5c7f70" stroke-width="4"/><text x="45" y="110" font-family="Arial" font-weight="bold" font-size="38" fill="#262421">'+escape(title)+'</text><text x="45" y="150" font-family="monospace" font-size="15" fill="#8a4a12">SYSTEM ARCHITECTURE</text>'
 for i,label in enumerate(labels):
  x=45+i*285;svg+=f'<rect x="{x}" y="220" width="240" height="105" rx="2" fill="#eae0c9" stroke="#5c7f70"/><text x="{x+120}" y="280" text-anchor="middle" font-family="Arial" font-size="22" fill="#262421">{escape(label)}</text>'
  if i<2:svg+=f'<path d="M{x+245} 272h30m-8-7 8 7-8 7" fill="none" stroke="#b2653b" stroke-width="3"/>'
 svg+=f'<text x="45" y="415" font-family="Arial" font-size="24" fill="#5c7f70">{escape(sub)}</text><path d="M45 460h270" stroke="#802521" stroke-width="8"/><path d="M315 460h270" stroke="#bb8530" stroke-width="8"/><path d="M585 460h270" stroke="#5c7f70" stroke-width="8"/></svg>'
 p.joinpath(file+'.svg').write_text(svg)

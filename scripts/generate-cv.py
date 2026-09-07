from pathlib import Path
from reportlab.platypus import SimpleDocTemplate, Paragraph, HRFlowable, PageBreak
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.colors import HexColor
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.enums import TA_CENTER
from pypdf import PdfReader
import shutil
import os

# Allow invocation from any working directory; keep generated files out of src.
os.chdir(Path(__file__).resolve().parents[1])
Path('output/pdf').mkdir(parents=True, exist_ok=True)
Path('tmp/pdfs').mkdir(parents=True, exist_ok=True)

for name,file in [('Calibri','calibri.ttf'),('Calibri-Bold','calibrib.ttf'),('Calibri-Italic','calibrii.ttf')]:
    pdfmetrics.registerFont(TTFont(name,'C:/Windows/Fonts/'+file))
pdfmetrics.registerFontFamily('Calibri',normal='Calibri',bold='Calibri-Bold',italic='Calibri-Italic',boldItalic='Calibri-Bold')
navy='#203D70'; blue='#1673BD'
body=ParagraphStyle('Body',fontName='Calibri',fontSize=10,leading=12.5,spaceAfter=5,textColor=HexColor('#202020'))
heading=ParagraphStyle('Heading',parent=body,fontName='Calibri-Bold',fontSize=12,leading=15,textColor=HexColor(navy),spaceBefore=14,spaceAfter=4,keepWithNext=True)
name_style=ParagraphStyle('Name',parent=heading,fontSize=21,leading=24,alignment=TA_CENTER,spaceBefore=0,spaceAfter=6)
contact=ParagraphStyle('Contact',parent=body,alignment=TA_CENTER,spaceAfter=4)
meta=ParagraphStyle('Meta',parent=body,fontName='Calibri-Italic',fontSize=9,leading=11,textColor=HexColor('#555555'),keepWithNext=True)
entry=ParagraphStyle('Entry',parent=body,spaceBefore=5,spaceAfter=3,keepWithNext=True)
bullet=ParagraphStyle('Bullet',parent=body,leftIndent=12,firstLineIndent=0,bulletIndent=1,spaceAfter=5)
def link(url,label): return f'<link href="{url}" color="{blue}"><u>{label}</u></link>'

def build(lang):
    pt=lang=='pt'; flow=[]
    def p(text,style=body): flow.append(Paragraph(text,style))
    def section(text):
        p(text,heading)
        rule = HRFlowable(width='100%',thickness=.55,color=HexColor('#2680DB'),spaceAfter=7)
        rule.keepWithNext = True
        flow.append(rule)
    def bullets(items):
        for item in items: flow.append(Paragraph(item,bullet,bulletText='•'))
    p('KAIQUE GERALDO CANDIDO DOS SANTOS',name_style)
    p('Marília - SP · (18) 99765-4874 · '+link('mailto:kaiique2404@gmail.com','kaiique2404@gmail.com'),contact)
    p(' · '.join([link('https://linkedin.com/in/kaique-geraldo','linkedin.com/in/kaique-geraldo'),link('https://github.com/kaiqueGeraldo','github.com/kaiqueGeraldo'),link('https://kaique.dev.br','kaique.dev.br')]),contact)
    section('RESUMO PROFISSIONAL' if pt else 'PROFESSIONAL SUMMARY')
    p('Desenvolvedor Java Pleno na Code Group, alocado na Núclea, com atuação no setor financeiro e foco no desenvolvimento e sustentação de microsserviços de pagamentos e recebimentos. Experiência com Java (11/17/21/25), Spring Boot, Apache Kafka, IBM MQ e infraestrutura em nuvem AWS. Conhecimento aplicado em Inteligência Artificial, incluindo agentes, integração com LLMs e integrações sistêmicas via MCP. Utilização de SDD (desenvolvimento orientado por especificações) no ciclo de desenvolvimento. Graduando em Engenharia de Software, com bagagem Full Stack (React, Angular, Next.js, Node.js), conectando back-end, front-end e necessidades de negócio.' if pt else 'Mid-level Java Developer at Code Group, assigned to Núclea, working in the financial sector with a focus on developing and maintaining payment and receivables microservices. Experience with Java (11/17/21/25), Spring Boot, Apache Kafka, IBM MQ and AWS cloud infrastructure. Applied Artificial Intelligence knowledge, including agents, LLM integration and system integrations through MCP. Use of SDD (specification-driven development) in the development cycle. Software Engineering undergraduate with a Full Stack background (React, Angular, Next.js, Node.js), connecting back-end, front-end and business needs.')
    section('HABILIDADES TÉCNICAS' if pt else 'TECHNICAL SKILLS')
    labels=['Linguagens','Backend &amp; Integração','Cloud &amp; Infraestrutura','Frontend','Banco de Dados','Inteligência Artificial','Ferramentas &amp; DevOps','Metodologias'] if pt else ['Languages','Backend &amp; Integration','Cloud &amp; Infrastructure','Frontend','Databases','Artificial Intelligence','Tools &amp; DevOps','Methodologies']
    values=['Java (11/17/21/25), SQL, JavaScript, TypeScript','Spring Boot, Spring MVC, Spring Data JPA, API RESTful, Apache Kafka, IBM MQ, Node.js','AWS (EC2, ECS, EKS, S3, Secrets Manager, CloudWatch, SQS, SNS, RDS, Aurora, Lambda), Docker','React, Angular, Next.js, HTML5/CSS3','DynamoDB, SQL Server, PostgreSQL','Agentes, integração com LLMs (OpenAI, Claude), MCP, SDD, Prompt Engineering' if pt else 'Agents, LLM integration (OpenAI, Claude), MCP, SDD, Prompt Engineering','Git, GitHub, Maven, Gradle, Postman','Scrum, Kanban, Testes Unitários (JUnit), Estruturas de Dados' if pt else 'Scrum, Kanban, Unit Testing (JUnit), Data Structures']
    for label,value in zip(labels,values): p(f'<font color="{navy}"><b>{label}:</b></font> {value}')
    section('EXPERIÊNCIA PROFISSIONAL' if pt else 'PROFESSIONAL EXPERIENCE')
    p('<b>Desenvolvedor Java Pleno</b> | Code Group (Alocado na Núclea)' if pt else '<b>Mid-level Java Developer</b> | Code Group (Assigned to Núclea)',entry)
    p('Híbrido | nov/2025 - Presente' if pt else 'Hybrid | Nov/2025 - Present',meta)
    p('Promoção de Java Júnior para Java Pleno em setembro de 2026.' if pt else 'Promoted from Junior to Mid-level Java Developer in September 2026.')
    bullets([
      'Desenvolvimento e sustentação de microsserviços na tribo de Pagamentos e Recebimentos, utilizando Java, Spring Boot e Apache Kafka em ambiente de alta performance e alto volume transacional.',
      'Infraestrutura em AWS: orquestração de containers com EKS, instâncias EC2, armazenamento em S3, monitoramento e alertas com CloudWatch, mensageria assíncrona via SQS/SNS, banco de dados relacional com RDS/Aurora e funções serverless com Lambda.',
      'Atuação em ambiente ágil com Scrum, participando de cerimônias de planejamento, revisão e retrospectiva em ciclos de entrega contínua.'
    ] if pt else [
      'Development and maintenance of microservices in the Payments and Receivables tribe, using Java, Spring Boot and Apache Kafka in a high-performance, high-transaction-volume environment.',
      'AWS infrastructure: container orchestration with EKS, EC2 instances, S3 storage, CloudWatch monitoring and alerts, asynchronous messaging through SQS/SNS, relational databases with RDS/Aurora and serverless functions with Lambda.',
      'Working in an agile environment with Scrum, participating in planning, review and retrospective ceremonies in continuous delivery cycles.'
    ])
    p('<b>Estagiário de TI</b> | MyData Cloud' if pt else '<b>IT Intern</b> | MyData Cloud',entry)
    p('Marília, SP | ago - nov/2025' if pt else 'Marília, SP | Aug - Nov/2025',meta)
    bullets(['Suporte técnico à infraestrutura de servidores Linux, monitoramento de redes e diagnóstico de incidentes em projetos de P&amp;D.' if pt else 'Technical support for Linux server infrastructure, network monitoring and incident diagnosis in R&amp;D projects.'])
    flow.append(PageBreak())
    section('FORMAÇÃO ACADÊMICA' if pt else 'EDUCATION')
    p('<b>Bacharelado em Engenharia de Software</b>' if pt else '<b>Bachelor’s Degree in Software Engineering</b>',entry)
    p('UNIMAR | Início: jan/2025 | Em andamento' if pt else 'UNIMAR | Started: Jan/2025 | In progress')
    p('<b>Técnico em Desenvolvimento de Sistemas</b>' if pt else '<b>Technical Degree in Systems Development</b>',entry)
    p('SENAI | Início: jan/2023 | Concluído: dez/2024' if pt else 'SENAI | Started: Jan/2023 | Completed: Dec/2024')
    section('PROJETOS RELEVANTES' if pt else 'RELEVANT PROJECTS')
    p('<b>Controle Financeiro</b> - '+('Projeto pessoal em evolução' if pt else 'Personal project in progress'),entry)
    p('<b>'+('Tecnologias' if pt else 'Technologies')+':</b> Java 21, Spring Boot 4, Next.js, PostgreSQL')
    p('Aplicação Full Stack para organizar contas, transações, cartões e faturas, acompanhar investimentos e planejar metas. Backend com regras financeiras, autenticação e rotinas agendadas; interface com dashboards de planejamento pessoal.' if pt else 'Full Stack application for managing accounts, transactions, credit cards and invoices, tracking investments and planning goals. Backend with financial rules, authentication and scheduled jobs; interface with personal planning dashboards.')
    p(link('https://github.com/kaiqueGeraldo/controle-financeiro','github.com/kaiqueGeraldo/controle-financeiro'))
    p('<b>HBU Gestão Cirurgias</b> - '+('Projeto acadêmico concluído' if pt else 'Completed academic project'),entry)
    p('<b>'+('Tecnologias' if pt else 'Technologies')+':</b> Java 21, Spring Boot 4, Next.js, PostgreSQL')
    p('Sistema para gestão do fluxo cirúrgico com agendamento, organização de equipes e salas, acompanhamento de cirurgias e histórico de alterações. Acesso por perfis de usuário. Desenvolvimento do frontend e backend de minha autoria, como projeto acadêmico na Unimar.' if pt else 'Surgical workflow management system with scheduling, team and room organization, surgery tracking and change history. Role-based access. I developed the frontend and backend as an academic project at Unimar.')
    p(link('https://github.com/kaiqueGeraldo/hbu-gestao-cirurgias','github.com/kaiqueGeraldo/hbu-gestao-cirurgias'))
    p('<b>MindTask</b> - Organização de Ideias e Projetos' if pt else '<b>MindTask</b> - Idea and Project Organization',entry)
    p('<b>'+('Tecnologias' if pt else 'Technologies')+':</b> React (Next.js), Node.js, SQL Server')
    p('Aplicação full stack para gerenciamento de projetos pessoais com grupos, tarefas em checklist, drag and drop, favoritos e troca de contas vinculadas. Backend em Node.js com SQL Server (padrão MVC) e autenticação JWT.' if pt else 'Full stack application for managing personal projects with groups, checklist tasks, drag and drop, favorites and linked account switching. Backend in Node.js with SQL Server (MVC pattern) and JWT authentication.')
    p(link('https://github.com/kaiqueGeraldo/mindtask','github.com/kaiqueGeraldo/mindtask'))
    section('CERTIFICAÇÕES E CURSOS' if pt else 'CERTIFICATIONS AND COURSES')
    cred='Ver Credencial' if pt else 'View Credential'
    bullets([
      'SP SKILLS 2024 - '+('Participação na fase estadual, modalidade #08 Desenvolvimento de Aplicativos Móveis' if pt else 'Participation in the state phase, category #08 Mobile App Development'),
      ('Curso Desenvolvimento Android e iOS com Flutter' if pt else 'Android and iOS Development with Flutter Course')+' - '+link('https://www.udemy.com/certificate/UC-9c9f6c2f-48c9-4566-a517-a593f588e664/',cred),
      ('Fundamentos de Redes' if pt else 'Networking Fundamentals')+' - '+link('https://www.credly.com/badges/256d35da-415c-4489-b47c-42c87597b777',cred),
      ('Comunicação Estratégica e Trabalho em Equipe' if pt else 'Strategic Communication and Teamwork')+' - Santander Open Academy'
    ])
    target=Path(f'output/pdf/Curriculo-Kaique-{lang}.pdf')
    doc=SimpleDocTemplate(str(target),pagesize=(595.25,842),leftMargin=64,rightMargin=64,topMargin=49,bottomMargin=45,title='Kaique Geraldo - '+('Desenvolvedor Java Pleno' if pt else 'Mid-level Java Developer'),author='Kaique Geraldo',lang='pt-BR' if pt else 'en-US')
    doc.build(flow)
    r=PdfReader(target); text='\n'.join(page.extract_text() for page in r.pages)
    assert len(r.pages)==2, len(r.pages)
    assert ('Engenharia de Software' if pt else 'Software Engineering') in text
    assert ('Java Pleno' if pt else 'Mid-level Java Developer') in text
    assert ('setembro de 2026' if pt else 'September 2026') in text
    assert ('Início: jan/2025 | Em andamento' if pt else 'Started: Jan/2025 | In progress') in text
    assert 'Ciência da Computação' not in text and 'Computer Science' not in text
    assert '2028' not in text
    assert 'boleto' not in text.lower() and 'payment slip' not in text.lower()
    assert text.index('Controle Financeiro') < text.index('HBU Gestão Cirurgias') < text.index('MindTask')
    assert 'Amazon Scraper' not in text
    Path(f'tmp/pdfs/cv-{lang}-extracted.txt').write_text(text,encoding='utf-8')
    shutil.copyfile(target,f'public/curriculo/Curriculo-Kaique-{lang}.pdf')
    print(lang, 'pages:',len(r.pages),'characters:',len(text),'links:',sum(len(page.get('/Annots',[])) for page in r.pages))
for lang in ['pt','en']: build(lang)

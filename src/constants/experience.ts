import { Locale, WorkExperienceType } from "@/types";

export const workExperience: Locale<WorkExperienceType> = {
	en: [
		{
			date_start: new Date("2025-04-01"),
			date_end: new Date("2025-05-30"),
			company: "Sibcode",
			role: "Project Manager (Intern)",
			location: "Tomsk, remote",
			description:
				"Analyzed the existing structure and created a mind map, developed technical documentation (brief and TOR), visualized business processes and user scenarios using BPMN diagrams. Prepared the project budget and organized team work in Bitrix24 - assigned roles, set deadlines, and monitored task execution through Kanban and Gantt Chart. Practiced UX/UI design by creating detailed page prototypes in Figma. Additionally, performed functional testing, identifying and fixing critical interface issues.",
			tags: [
				{ label: "Sibcode", href: "https://sibcode.team/" },
				{ label: "Figma", href: "https://www.figma.com/" },
				{ label: "Miro", href: "https://miro.com/" },
				{ label: "bitrix24", href: "https://www.bitrix24.ru/" },
			],
		},
		{
			date_start: new Date("2023-01-01"),
			date_end: new Date("2024-01-30"),
			company: "Self-employed",
			role: "Frontend Developer",
			location: "Remote",
			description:
				"Developed SPA and SSR applications with React/Next.js: fully configured Webpack, implemented pixel-perfect layouts, created UI kits and worked with existing ones, deployed projects on VDS/VPS using web servers with domain and SSL configuration. Optimized existing projects through code refactoring and component decomposition. Integrated REST/WebSocket APIs, including working with SMTP services. Carried out the full development cycle from technical audit to production release and further maintenance. Migrated projects to TypeScript: rewrote the codebase, typed APIs, state, and components, configured strict typing and absolute imports.",
			tags: [
				{ label: "Nextjs", href: "https://nextjs.org/" },
				{ label: "React", href: "https://react.dev/" },
				{ label: "Webpack", href: "https://webpack.js.org/" },
				{ label: "Nginx", href: "https://nginx.org/" },
				{ label: "Redux Toolkit", href: "https://redux-toolkit.js.org/" },
			],
		},
	],
	ru: [
		{
			date_start: new Date("2025-04-01"),
			date_end: new Date("2025-05-30"),
			company: "Sibcode",
			role: "Менеджер проекта (стажер)",
			location: "Томск, удаленная",
			description:
				"Анализировал существующую структуру и создавал ментальную карту, разрабатывал техническую документацию (бриф и ТЗ), визуализировал бизнес-процессы и пользовательские сценарии через BPMN-схемы. Формировал смету проекта и организовывал командную работу в Bitrix24 - распределял роли, устанавливал сроки и контролировал выполнение задач через Канбан и Диаграмму Ганта. Практиковался в UX/UI-дизайне, создавая детализированные прототипы страниц в Figma. Дополнительно проводил функциональное тестирование, выявляя и фиксируя критические ошибки в работе интерфейса.",
			tags: [
				{ label: "Sibcode", href: "https://sibcode.team/" },
				{ label: "Figma", href: "https://www.figma.com/" },
				{ label: "Miro", href: "https://miro.com/" },
				{ label: "bitrix24", href: "https://www.bitrix24.ru/" },
			],
		},
		{
			date_start: new Date("2023-01-01"),
			date_end: new Date("2024-01-30"),
			company: "Работа на себя",
			role: "Frontend-разработчик",
			location: "Удаленная",
			description:
				"Разрабатывал SPA и SSR-приложения на React/Next.js: полностью настраивал Webpack, реализовывал pixel-perfect верстку, создавал UI-киты и работал с существующими, деплоил проекты на VDS/VPS используя веб сервера с настройкой доменов и SSL. Оптимизировал существующие проекты через рефакторинг кода и декомпозицию компонентов. Интегрировал REST/WebSocket API, включая работу с SMTP-сервисами. Реализовывал полный цикл разработки от технического аудита до вывода в продакшен и дальнейшей поддержки. Занимался миграцией проектов на TypeScript: переписывал кодовую базу, типизировал API, состояния и компоненты, настраивал конфигурации для строгой типизации и абсолютных импортов.",
			tags: [
				{ label: "Nextjs", href: "https://nextjs.org/" },
				{ label: "React", href: "https://react.dev/" },
				{ label: "Webpack", href: "https://webpack.js.org/" },
				{ label: "Nginx", href: "https://nginx.org/" },
				{ label: "Redux Toolkit", href: "https://redux-toolkit.js.org/" },
			],
		},
	],
	de: [
		{
			date_start: new Date("2025-04-01"),
			date_end: new Date("2025-05-30"),
			company: "Sibcode",
			role: "Projektmanager (Praktikant)",
			location: "Tomsk, Remote",
			description:
				"Analysierte die bestehende Struktur und erstellte eine Mindmap, entwickelte technische Dokumentation (Briefing und Pflichtenheft), visualisierte Geschäftsprozesse und Benutzerszenarien mit BPMN-Diagrammen. Erstellte das Projektbudget und organisierte die Teamarbeit in Bitrix24 – verteilte Rollen, legte Fristen fest und überwachte die Aufgabenverfolgung über Kanban und Gantt-Diagramm. Sammelte Erfahrung im UX/UI-Design, indem er detaillierte Seitenprototypen in Figma erstellte. Zusätzlich führte er Funktionstests durch und identifizierte sowie behob kritische Fehler in der Benutzeroberfläche.",
			tags: [
				{ label: "Sibcode", href: "https://sibcode.team/" },
				{ label: "Figma", href: "https://www.figma.com/" },
				{ label: "Miro", href: "https://miro.com/" },
				{ label: "bitrix24", href: "https://www.bitrix24.ru/" },
			],
		},
		{
			date_start: new Date("2023-01-01"),
			date_end: new Date("2024-01-30"),
			company: "Selbstständig",
			role: "Frontend-Entwickler",
			location: "Remote",
			description:
				"Entwickelte SPA- und SSR-Anwendungen mit React/Next.js: vollständige Webpack-Konfiguration, pixelgenaue Layouts, Erstellung von UI-Kits und Arbeit mit bestehenden, Deployment von Projekten auf VDS/VPS mit Webservern, Domain- und SSL-Konfiguration. Optimierte bestehende Projekte durch Code-Refactoring und Komponentendekomposition. Integrierte REST/WebSocket-APIs, einschließlich Arbeit mit SMTP-Diensten. Führte den vollständigen Entwicklungszyklus vom technischen Audit bis zum Go-Live und anschließender Wartung durch. Migrierte Projekte zu TypeScript: Umschreiben des Codes, Typisierung von APIs, Zuständen und Komponenten, Konfiguration für strenge Typisierung und absolute Importe.",
			tags: [
				{ label: "Nextjs", href: "https://nextjs.org/" },
				{ label: "React", href: "https://react.dev/" },
				{ label: "Webpack", href: "https://webpack.js.org/" },
				{ label: "Nginx", href: "https://nginx.org/" },
				{ label: "Redux Toolkit", href: "https://redux-toolkit.js.org/" },
			],
		},
	],
	fi: [
		{
			date_start: new Date("2025-04-01"),
			date_end: new Date("2025-05-30"),
			company: "Sibcode",
			role: "Projektipäällikkö (Harjoittelija)",
			location: "Tomsk, etätyö",
			description:
				"Analysoin olemassa olevaa rakennetta ja loin miellekartan, kehitin teknistä dokumentaatiota (brief ja TOR), visualisoin liiketoimintaprosesseja ja käyttäjäskenaarioita BPMN-kaavioiden avulla. Laadin projektin budjetin ja järjestin tiimityötä Bitrix24:ssä - jaoin roolit, asetin määräajat ja seurasin tehtävien suorittamista Kanbanin ja Gantt-kaavion avulla. Harjoittelin UX/UI-suunnittelua luomalla yksityiskohtaisia sivuprototyyppejä Figma:ssa. Lisäksi suoritin toiminnallisia testejä tunnistaen ja korjaten kriittisiä käyttöliittymäongelmia.",
			tags: [
				{ label: "Sibcode", href: "https://sibcode.team/" },
				{ label: "Figma", href: "https://www.figma.com/" },
				{ label: "Miro", href: "https://miro.com/" },
				{ label: "bitrix24", href: "https://www.bitrix24.ru/" },
			],
		},
		{
			date_start: new Date("2023-01-01"),
			date_end: new Date("2024-01-30"),
			company: "Yrittäjä",
			role: "Frontend-kehittäjä",
			location: "Etätyö",
			description:
				"Kehitin SPA- ja SSR-sovelluksia React/Next.js:llä: konfiguroin Webpackin täysin, toteutin pixel-perfect-taiton, loin UI-kitit ja käytin olemassa olevia, deployasin projekteja VDS/VPS-palvelimille verkkopalvelimien, domainien ja SSL:n asetuksilla. Optimoitsin olemassa olevia projekteja koodin refaktoroinnilla ja komponenttien pilkkomisella. Integroitin REST/WebSocket-API:t, mukaan lukien SMTP-palveluiden käytön. Toteutin koko kehityssyklin teknisestä auditoinnista tuotantoon ja jatkotukeen. Migroin projekteja TypeScriptiin: kirjoitin koodipohjan uudelleen, typetin API:t, tilan ja komponentit, konfiguroin tiukan tyypityksen ja absoluuttiset importit.",
			tags: [
				{ label: "Nextjs", href: "https://nextjs.org/" },
				{ label: "React", href: "https://react.dev/" },
				{ label: "Webpack", href: "https://webpack.js.org/" },
				{ label: "Nginx", href: "https://nginx.org/" },
				{ label: "Redux Toolkit", href: "https://redux-toolkit.js.org/" },
			],
		},
	],
	zh: [
		{
			date_start: new Date("2025-04-01"),
			date_end: new Date("2025-05-30"),
			company: "Sibcode",
			role: "项目经理（实习生）",
			location: "托木斯克，远程",
			description:
				"分析了现有结构并创建了思维导图，开发了技术文档（简报和技术任务书），通过 BPMN 图表可视化业务流程和用户场景。编制项目预算并在 Bitrix24 中组织团队工作 - 分配角色、设定截止日期，并通过看板和甘特图跟踪任务执行。通过在 Figma 中创建详细的页面原型进行 UX/UI 设计实践。此外，还进行了功能测试，识别并修复了界面中的关键问题。",
			tags: [
				{ label: "Sibcode", href: "https://sibcode.team/" },
				{ label: "Figma", href: "https://www.figma.com/" },
				{ label: "Miro", href: "https://miro.com/" },
				{ label: "bitrix24", href: "https://www.bitrix24.ru/" },
			],
		},
		{
			date_start: new Date("2023-01-01"),
			date_end: new Date("2024-01-30"),
			company: "自由职业",
			role: "前端开发工程师",
			location: "远程",
			description:
				"使用 React/Next.js 开发 SPA 和 SSR 应用：完全配置 Webpack，实现像素级还原的页面布局，创建 UI 工具包并使用现有的，部署项目到 VDS/VPS，配置域名和 SSL。通过代码重构和组件分解优化现有项目。集成 REST/WebSocket API，包括使用 SMTP 服务。从技术审计到上线和后续维护，完成了完整的开发周期。迁移项目到 TypeScript：重写代码库，类型化 API、状态和组件，配置严格类型检查和绝对导入。",
			tags: [
				{ label: "Nextjs", href: "https://nextjs.org/" },
				{ label: "React", href: "https://react.dev/" },
				{ label: "Webpack", href: "https://webpack.js.org/" },
				{ label: "Nginx", href: "https://nginx.org/" },
				{ label: "Redux Toolkit", href: "https://redux-toolkit.js.org/" },
			],
		},
	],
	es: [
		{
			date_start: new Date("2025-04-01"),
			date_end: new Date("2025-05-30"),
			company: "Sibcode",
			role: "Gerente de Proyecto (Practicante)",
			location: "Tomsk, remoto",
			description:
				"Analizó la estructura existente y creó un mapa mental, desarrolló documentación técnica (brief y TOR), visualizó procesos empresariales y escenarios de usuario mediante diagramas BPMN. Preparó el presupuesto del proyecto y organizó el trabajo en equipo en Bitrix24 - asignó roles, estableció plazos y supervisó la ejecución de tareas a través de Kanban y el Diagrama de Gantt. Practicó diseño UX/UI creando prototipos detallados de páginas en Figma. Además, realizó pruebas funcionales, identificando y corrigiendo problemas críticos de interfaz.",
			tags: [
				{ label: "Sibcode", href: "https://sibcode.team/" },
				{ label: "Figma", href: "https://www.figma.com/" },
				{ label: "Miro", href: "https://miro.com/" },
				{ label: "bitrix24", href: "https://www.bitrix24.ru/" },
			],
		},
		{
			date_start: new Date("2023-01-01"),
			date_end: new Date("2024-01-30"),
			company: "Autónomo",
			role: "Desarrollador Frontend",
			location: "Remoto",
			description:
				"Desarrolló aplicaciones SPA y SSR con React/Next.js: configuró completamente Webpack, implementó maquetación pixel-perfect, creó kits UI y trabajó con existentes, desplegó proyectos en VDS/VPS utilizando servidores web con configuración de dominio y SSL. Optimizó proyectos existentes mediante refactorización de código y descomposición de componentes. Integró APIs REST/WebSocket, incluyendo el uso de servicios SMTP. Realizó el ciclo completo de desarrollo desde la auditoría técnica hasta la puesta en producción y el mantenimiento posterior. Migró proyectos a TypeScript: reescribió la base de código, tipó APIs, estados y componentes, configuró tipado estricto e importaciones absolutas.",
			tags: [
				{ label: "Nextjs", href: "https://nextjs.org/" },
				{ label: "React", href: "https://react.dev/" },
				{ label: "Webpack", href: "https://webpack.js.org/" },
				{ label: "Nginx", href: "https://nginx.org/" },
				{ label: "Redux Toolkit", href: "https://redux-toolkit.js.org/" },
			],
		},
	],
	fr: [
		{
			date_start: new Date("2025-04-01"),
			date_end: new Date("2025-05-30"),
			company: "Sibcode",
			role: "Chef de projet (Stagiaire)",
			location: "Tomsk, télétravail",
			description:
				"Analysé la structure existante et créé une carte mentale, rédigé de la documentation technique (brief et cahier des charges), visualisé les processus métiers et scénarios utilisateurs à l’aide de diagrammes BPMN. Préparé le budget du projet et organisé le travail d’équipe dans Bitrix24 - attribué les rôles, défini les délais et suivi l’exécution des tâches via Kanban et le diagramme de Gantt. Pratiqué le design UX/UI en créant des prototypes détaillés de pages dans Figma. De plus, effectué des tests fonctionnels, identifiant et corrigeant les problèmes critiques d’interface.",
			tags: [
				{ label: "Sibcode", href: "https://sibcode.team/" },
				{ label: "Figma", href: "https://www.figma.com/" },
				{ label: "Miro", href: "https://miro.com/" },
				{ label: "bitrix24", href: "https://www.bitrix24.ru/" },
			],
		},
		{
			date_start: new Date("2023-01-01"),
			date_end: new Date("2024-01-30"),
			company: "Travail indépendant",
			role: "Développeur Frontend",
			location: "Télétravail",
			description:
				"Développé des applications SPA et SSR avec React/Next.js : configuration complète de Webpack, implémentation de maquettes pixel-perfect, création de kits UI et utilisation d’existants, déploiement de projets sur VDS/VPS avec configuration de domaine et SSL. Optimisé des projets existants par refactorisation du code et décomposition des composants. Intégré des API REST/WebSocket, y compris l’utilisation de services SMTP. Réalisé le cycle complet de développement de l’audit technique à la mise en production et au support ultérieur. Migré des projets vers TypeScript : réécriture de la base de code, typage des API, états et composants, configuration de typage strict et importations absolues.",
			tags: [
				{ label: "Nextjs", href: "https://nextjs.org/" },
				{ label: "React", href: "https://react.dev/" },
				{ label: "Webpack", href: "https://webpack.js.org/" },
				{ label: "Nginx", href: "https://nginx.org/" },
				{ label: "Redux Toolkit", href: "https://redux-toolkit.js.org/" },
			],
		},
	],
	ar: [
		{
			date_start: new Date("2025-04-01"),
			date_end: new Date("2025-05-30"),
			company: "Sibcode",
			role: "مدير مشروع (متدرب)",
			location: "تومسك، عن بعد",
			description:
				"قمتُ بتحليل الهيكل الحالي وإنشاء خريطة ذهنية، طوّرتُ الوثائق الفنية (الملخص وملف المتطلبات)، وقمتُ بتصوير العمليات التجارية وسيناريوهات المستخدم باستخدام مخططات BPMN. أعددت ميزانية المشروع ونظّمت عمل الفريق في Bitrix24 - وزّعت الأدوار، حدّدت المهل الزمنية، وتابعت تنفيذ المهام عبر كانبان ومخطط جانت. مارست تصميم واجهات المستخدم UX/UI بإنشاء نماذج أولية مفصلة للصفحات في Figma. بالإضافة إلى ذلك، أجريت اختبارات وظيفية وحددت وأصلحت مشكلات حرجة في الواجهة.",
			tags: [
				{ label: "Sibcode", href: "https://sibcode.team/" },
				{ label: "Figma", href: "https://www.figma.com/" },
				{ label: "Miro", href: "https://miro.com/" },
				{ label: "bitrix24", href: "https://www.bitrix24.ru/" },
			],
		},
		{
			date_start: new Date("2023-01-01"),
			date_end: new Date("2024-01-30"),
			company: "عمل حر",
			role: "مطور الواجهة الأمامية",
			location: "عن بعد",
			description:
				"طوّرت تطبيقات SPA و SSR باستخدام React/Next.js: قمت بإعداد Webpack بالكامل، تنفيذ تصميمات pixel-perfect، إنشاء مكتبات واجهة مستخدم والعمل مع القائمة منها، نشر المشاريع على خوادم VDS/VPS مع إعدادات النطاق و SSL. حسّنت المشاريع الحالية من خلال إعادة هيكلة الكود وتقسيم المكونات. دمجت واجهات REST/WebSocket، بما في ذلك العمل مع خدمات SMTP. نفّذت دورة تطوير كاملة من التدقيق الفني إلى الإصدار في الإنتاج والدعم اللاحق. نقلت المشاريع إلى TypeScript: أعدت كتابة قاعدة الكود، كتبت تعريفات الأنواع لواجهات برمجة التطبيقات والحالة والمكونات، وأعددت التهيئة للتأكد من الالتزام الصارم بالأنواع والاستيراد المطلق.",
			tags: [
				{ label: "Nextjs", href: "https://nextjs.org/" },
				{ label: "React", href: "https://react.dev/" },
				{ label: "Webpack", href: "https://webpack.js.org/" },
				{ label: "Nginx", href: "https://nginx.org/" },
				{ label: "Redux Toolkit", href: "https://redux-toolkit.js.org/" },
			],
		},
	],
	pt: [
		{
			date_start: new Date("2025-04-01"),
			date_end: new Date("2025-05-30"),
			company: "Sibcode",
			role: "Gerente de Projeto (Estagiário)",
			location: "Tomsk, remoto",
			description:
				"Analisei a estrutura existente e criei um mapa mental, desenvolvi documentação técnica (brief e especificações), visualizei processos de negócios e cenários de usuário usando diagramas BPMN. Preparei o orçamento do projeto e organizei o trabalho da equipe no Bitrix24 - atribuí papéis, defini prazos e acompanhei a execução de tarefas através do Kanban e do Gráfico de Gantt. Pratiquei design UX/UI criando protótipos detalhados de páginas no Figma. Além disso, realizei testes funcionais, identificando e corrigindo problemas críticos na interface.",
			tags: [
				{ label: "Sibcode", href: "https://sibcode.team/" },
				{ label: "Figma", href: "https://www.figma.com/" },
				{ label: "Miro", href: "https://miro.com/" },
				{ label: "bitrix24", href: "https://www.bitrix24.ru/" },
			],
		},
		{
			date_start: new Date("2023-01-01"),
			date_end: new Date("2024-01-30"),
			company: "Autônomo",
			role: "Desenvolvedor Frontend",
			location: "Remoto",
			description:
				"Desenvolvi aplicações SPA e SSR com React/Next.js: configurei completamente o Webpack, implementei layouts pixel-perfect, criei kits UI e utilizei existentes, fiz deploy de projetos em VDS/VPS com servidores web configurados para domínio e SSL. Otimizei projetos existentes por meio de refatoração de código e decomposição de componentes. Integrei APIs REST/WebSocket, incluindo serviços SMTP. Realizei o ciclo completo de desenvolvimento desde a auditoria técnica até a entrega em produção e manutenção posterior. Migrei projetos para TypeScript: reescrevi a base de código, tipifiquei APIs, estados e componentes, configurei tipagem estrita e importações absolutas.",
			tags: [
				{ label: "Nextjs", href: "https://nextjs.org/" },
				{ label: "React", href: "https://react.dev/" },
				{ label: "Webpack", href: "https://webpack.js.org/" },
				{ label: "Nginx", href: "https://nginx.org/" },
				{ label: "Redux Toolkit", href: "https://redux-toolkit.js.org/" },
			],
		},
	],
};

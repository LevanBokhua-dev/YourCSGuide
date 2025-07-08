import { Brain, Globe, Lock, LucideIcon } from "lucide-react";

export type Step = {
  title: string;
  description: string;
  details?: string;
  resource?: string;
  category?: "fundamentals" | "tools" | "frameworks" | "backend" | "security";
  estimatedTime?: string;
};

type Topic = {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  roadmap: Step[];
};

export const topics: Record<string, Topic> = {
  "computer-architecture": {
    title: "კომპიუტერის არქიტექტურა და საოპერაციო სისტემები",
    description: "გაიგე როგორ მუშაობს კომპიუტერი შიგნიდან",
    icon: Brain,
    color: "bg-gray-700",
    roadmap: [
      {
        title: "CPU და მეხსიერება",
        description: "გაიგე კომპიუტერის ძირითადი კომპონენტები",
        details:
          "CPU, RAM, რეგისტრები, instruction cycle და cache-ის მნიშვნელობა.",
        resource:
          "https://www.geeksforgeeks.org/computer-organization-and-architecture-tutorials/",
        category: "fundamentals",
        estimatedTime: "3-5 დღე",
      },
      {
        title: "საოპერაციო სისტემის საფუძვლები",
        description: "როგორ მართავს OS პროცესებს და რესურსებს",
        details:
          "პროცესები, თრედები, multitasking, schedulers და memory management.",
        resource:
          "https://www.geeksforgeeks.org/introduction-of-operating-system-set-1/",
        category: "fundamentals",
        estimatedTime: "3-5 დღე",
      },
    ],
  },
  "theory-of-computation": {
    title: "გამოთვლადობის თეორია",
    description: "გამოთვლადობის საზღვრები და ალგორითმების თეორიული საფუძვლები",
    icon: Brain,
    color: "bg-blue-800",
    roadmap: [
      {
        title: "ავტომატები და ენა",
        description: "დაიწყე ავტომატების თეორიით",
        details:
          "Finite State Machines (FSM), Regular expressions, და ციფრული ენები.",
        resource: "https://www.javatpoint.com/theory-of-computation",
        category: "fundamentals",
        estimatedTime: "2-3 დღე",
      },
      {
        title: "გამოთვლადობა და Turing მანქანები",
        description: "შესაძლებელია თუ არა ამ ამოცანის ამოხსნა?",
        details: "Turing Machines, Halting Problem და Church-Turing thesis.",
        resource:
          "https://www.khanacademy.org/computing/computer-science/algorithms",
        category: "fundamentals",
        estimatedTime: "3-5 დღე",
      },
    ],
  },
  "software-engineering": {
    title: "პროგრამული უზრუნველყოფის ინჟინერია",
    description: "ისწავლე როგორ ავაშენოთ დიდი და სტაბილური სისტემები",
    icon: Brain,
    color: "bg-cyan-600",
    roadmap: [
      {
        title: "ვერსიის კონტროლი",
        description: "ისწავლე Git და GitHub-ს გამოყენება",
        details:
          "ბაზისური ბრძანებები, branch-ები, pull request-ები და თანამშრომლობა.",
        resource: "https://www.atlassian.com/git/tutorials",
        category: "tools",
        estimatedTime: "2-3 დღე",
      },
      {
        title: "ტესტირება და დებაგი",
        description: "როგორ ვამოწმოთ ჩვენი კოდი სწორად მუშაობს?",
        details: "Unit testing, integration testing, debugger-ების გამოყენება.",
        resource: "https://www.geeksforgeeks.org/software-testing-basics/",
        category: "tools",
        estimatedTime: "2-3 დღე",
      },
    ],
  },
  hci: {
    title: "ადამიანი-კომპიუტერის ინტერაქცია",
    description: "UX დიზაინი და ინტერფეისის აგების ფსიქოლოგია",
    icon: Brain,
    color: "bg-pink-600",
    roadmap: [
      {
        title: "UX/UI საფუძვლები",
        description: "შექმენი მარტივად გამოსაყენებელი ინტერფეისები",
        details: "ცნებები: Feedback, Consistency, Affordance, Accessibility.",
        resource:
          "https://www.interaction-design.org/literature/topics/human-computer-interaction",
        category: "fundamentals",
        estimatedTime: "2-3 დღე",
      },
      {
        title: "ტესტირება და გაუმჯობესება",
        description:
          "მომხმარებლის ფიდბექის გამოყენება დიზაინის გაუმჯობესებისთვის",
        details: "Usability testing, A/B ტესტირება და ჰეპურისტიკული შეფასება.",
        resource: "https://www.nngroup.com/articles/ux-research-cheat-sheet/",
        category: "tools",
        estimatedTime: "1-2 დღე",
      },
    ],
  },

  "web-development": {
    title: "ვებ განვითარების გზა",
    description: "გზამკვლევი ფრონტენდის, ბექენდის ან DevOps-ის კარიერისთვის",
    icon: Globe,
    color: "bg-purple-500",
    roadmap: [
      {
        title: "ინტერნეტი",
        description: "გაიგე, როგორ მუშაობს ინტერნეტი (DNS, HTTP, ბრაუზერები).",
        details:
          "შეისწავლე კლიენტი-სერვერის კომუნიკაცია, რა ხდება როცა URL-ს წერთ, და ისეთი ცნებები როგორებიცაა IP, TCP, HTTP.",
        resource:
          "https://developer.mozilla.org/en-US/docs/Learn/Common_questions/How_does_the_Internet_work",
        category: "fundamentals",
        estimatedTime: "1-2 დღე",
      },
      {
        title: "HTML",
        description: "შეისწავლე ვებგვერდის სტრუქტურა HTML-ის გამოყენებით.",
        details:
          "მუშაობა სემანტიკურ თეგებზე, ფორმებზე, მედიის ჩასმასა და ხელმისაწვდომობაზე (ARIA).",
        resource: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        category: "fundamentals",
        estimatedTime: "2-3 დღე",
      },
      {
        title: "CSS",
        description: "დასტილე გვერდი CSS-ის დახმარებით.",
        details:
          "ისწავლე სელექტორები, box model, Flex/Grid, მედია ქუერიები და ცვლადები.",
        resource: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        category: "fundamentals",
        estimatedTime: "3-5 დღე",
      },
      {
        title: "JavaScript",
        description: "დამატე ლოგიკა და ინტერაქტივობა JavaScript-ით.",
        details:
          "ისწავლე ცვლადები, ციკლები, DOM მანიპულაცია, ES6+, async/await და fetch API.",
        resource: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        category: "fundamentals",
        estimatedTime: "1-2 კვირა",
      },
    ],
  },

  "artificial-intelligence": {
    title: "ხელოვნური ინტელექტი და მანქანური სწავლა",
    description: "ისწავლე როგორ ფიქრობენ და სწავლობენ მანქანები",
    icon: Brain,
    color: "bg-indigo-600",
    roadmap: [
      {
        title: "ხაზობრივი ალგებრა",
        description: "გაიგე ვექტორები, მატრიცები და მათი ოპერაციები.",
        details:
          "ძირითადი ცნებები ნეირონულ ქსელებსა და მოდელებთან მუშაობისთვის.",
        resource: "https://www.khanacademy.org/math/linear-algebra",
        category: "fundamentals",
        estimatedTime: "3-5 დღე",
      },
      {
        title: "Python",
        description: "ისწავლე Python ხელოვნური ინტელექტისთვის.",
        details: "სინტაქსი, მონაცემთა სტრუქტურები, NumPy და Pandas.",
        resource: "https://realpython.com/",
        category: "tools",
        estimatedTime: "1-2 კვირა",
      },
      {
        title: "მანქანური სწავლების ალგორითმები",
        description:
          "გაიგე ძირითადი ალგორითმები: რეგრესია, კლასიფიკაცია და სხვ.",
        details:
          "სუპერვიზირებული და არასუპერვიზირებული სწავლა, გადაწყვეტილების ხეები, SVM, K-means.",
        resource: "https://scikit-learn.org/stable/user_guide.html",
        category: "frameworks",
        estimatedTime: "1-2 კვირა",
      },
      {
        title: "ნეირონული ქსელები",
        description: "ისწავლე ღრმა სწავლა ნეირონული ქსელების გამოყენებით.",
        details:
          "შეისწავლე forward/backpropagation, აქტივაციის ფუნქციები, CNN და RNN სტრუქტურები.",
        resource: "https://www.tensorflow.org/learn",
        category: "frameworks",
        estimatedTime: "2-3 კვირა",
      },
    ],
  },

  cybersecurity: {
    title: "კიბერუსაფრთხოება",
    description: "სიცოცხლეზე დამოკიდებული სისტემებისა და ქსელების დაცვა",
    icon: Lock,
    color: "bg-red-500",
    roadmap: [
      {
        title: "ქსელური საფუძვლები",
        description: "გაიგე IP, TCP, UDP, პორტები და DNS.",
        details: "ეს არის ის, თუ როგორ მოძრაობს ინფორმაცია ინტერნეტში.",
        resource:
          "https://www.cloudflare.com/learning/network-layer/what-is-a-computer-network/",
        category: "fundamentals",
        estimatedTime: "2 დღე",
      },
      {
        title: "დაშიფვრა",
        description: "ისწავლე როგორ იცავს დაშიფვრა მონაცემებს.",
        details:
          "სიმეტრიული და ასიმეტრიული დაშიფვრა, SSL/TLS, ჰეშირების ალგორითმები.",
        resource:
          "https://www.khanacademy.org/computing/computer-science/cryptography",
        category: "security",
        estimatedTime: "2-4 დღე",
      },
      {
        title: "ფაიერვოლები",
        description: "გაიგე როგორ მუშაობს ფაიერვოლი და როგორ იცავს სისტემებს.",
        details:
          "ტრეფიკის ფილტრაცია, წვდომის წესები, ფაიერვოლის ტიპები და მაგალითები.",
        resource:
          "https://www.geeksforgeeks.org/firewalls-in-computer-network/",
        category: "security",
        estimatedTime: "1 დღე",
      },
      {
        title: "მუქარის აღმოჩენა",
        description: "მოიცანი მავნე ქცევები სისტემებსა და ქსელებში.",
        details:
          "IDS/IPS სისტემები, ანომალიების აღმოჩენა და ძირითადი ფორენზიკა.",
        resource: "https://www.sans.org/white-papers/350/",
        category: "security",
        estimatedTime: "3-5 დღე",
      },
    ],
  },
  "algorithms-data-structures": {
    title: "ალგორითმები და მონაცემთა სტრუქტურები",
    description: "ისწავლე პროგრამირების ლოგიკა და ეფექტური მონაცემთა მართვა",
    icon: Globe,
    color: "bg-orange-400",
    roadmap: [
      {
        title: "ცვლადები და ტიპები",
        description:
          "გაიგე ცვლადების მნიშვნელობა და მონაცემთა ტიპების გამოყენება.",
        details:
          "ესაა პროგრამირების საფუძველი, რომელიც გამოიყენება ალგორითმების სწორად გასაგებად.",
        resource: "https://www.geeksforgeeks.org/data-types-in-c/",
        category: "fundamentals",
        estimatedTime: "1-2 დღე",
      },
      {
        title: "Array და Linked List",
        description: "ისწავლე მონაცემთა ჩამონათვალის ორი ძირითადი სტრუქტურა.",
        details:
          "განსხვავებები array-სა და linked list-ს შორის, მუშაობის პრინციპები და გამოყენების შემთხვევები.",
        resource: "https://www.geeksforgeeks.org/data-structures/linked-list/",
        category: "fundamentals",
        estimatedTime: "2-3 დღე",
      },
      {
        title: "Stack და Queue",
        description: "მონაცემების მართვა წესრიგის მიხედვით.",
        details:
          "Stack (LIFO) და Queue (FIFO) სტრუქტურები გამოიყენება უამრავ ალგორითმში.",
        resource: "https://www.geeksforgeeks.org/stack-data-structure/",
        category: "fundamentals",
        estimatedTime: "2 დღე",
      },
      {
        title: "ძებნა და სორტირება",
        description: "გაიცანი ეფექტური ძებნისა და სორტირების ალგორითმები.",
        details:
          "Binary Search, Bubble Sort, Merge Sort და მათი დროითი კომპლექსურობა.",
        resource: "https://visualgo.net/en/sorting",
        category: "frameworks",
        estimatedTime: "2-4 დღე",
      },
    ],
  },

  databases: {
    title: "მონაცემთა ბაზები",
    description: "ისწავლე მონაცემების შენახვა, მართვა და მანიპულაცია",
    icon: Globe,
    color: "bg-teal-500",
    roadmap: [
      {
        title: "მონაცემთა ბაზის საფუძვლები",
        description: "გაიგე რას ნიშნავს მონაცემთა ბაზა და როგორ მუშაობს.",
        details: "მონაცემთა ტიპები, სქემა და რელაციური სტრუქტურა.",
        resource: "https://www.geeksforgeeks.org/database-management-system/",
        category: "fundamentals",
        estimatedTime: "1-2 დღე",
      },
      {
        title: "SQL",
        description: "ისწავლე მონაცემებზე წვდომის ენა SQL.",
        details:
          "SELECT, INSERT, UPDATE, DELETE — ძირითადი ოპერაციები რელაციურ ბაზებში.",
        resource: "https://sqlzoo.net/",
        category: "tools",
        estimatedTime: "2-4 დღე",
      },
      {
        title: "ინდექსები და ნორმალიზაცია",
        description: "გაუმჯობესე მონაცემთა ბაზის ეფექტურობა.",
        details:
          "ნორმალიზაციის დონეები და ინდექსების სტრატეგიები მონაცემების სწრაფად მოსაძებნად.",
        resource: "https://www.geeksforgeeks.org/database-normalization/",
        category: "tools",
        estimatedTime: "2 დღე",
      },
      {
        title: "NoSQL",
        description: "გაიგე როდის და რატომ გამოიყენება NoSQL (მაგ. MongoDB).",
        details: "დოკუმენტური, Key-Value, Column Store და Graph ტიპის ბაზები.",
        resource: "https://www.mongodb.com/nosql-explained",
        category: "tools",
        estimatedTime: "2-3 დღე",
      },
    ],
  },

  "mobile-development": {
    title: "მობაილ დეველოპმენტი",
    description:
      "ისწავლე როგორ შეიქმნას მძლავრი აპლიკაციები iOS და Android-სთვის",
    icon: Globe,
    color: "bg-emerald-500",
    roadmap: [
      {
        title: "მობილური პლატფორმების გაცნობა",
        description: "გაიგე განსხვავება iOS და Android-ს შორის.",
        details: "სისტემის არქიტექტურა, Store წესები და ძირითადი კომპონენტები.",
        resource: "https://developer.android.com/guide",
        category: "fundamentals",
        estimatedTime: "1 დღე",
      },
      {
        title: "Flutter",
        description: "დაწერე მობილური აპები Dart ენით.",
        details:
          "Flutter-ს გამოყენებით ერთ აპში შეგიძლია შექმნა ორივე პლატფორმისთვის თავსებადი აპლიკაცია.",
        resource: "https://docs.flutter.dev/",
        category: "frameworks",
        estimatedTime: "1-2 კვირა",
      },
      {
        title: "React Native",
        description: "მობილური აპების შექმნა React-ის ცოდნის საფუძველზე.",
        details: "Reusable კომპონენტები, Expo, Navigation და API call-ები.",
        resource: "https://reactnative.dev/docs/getting-started",
        category: "frameworks",
        estimatedTime: "1-2 კვირა",
      },
      {
        title: "დეპლოი და ტესტირება",
        description: "აპის რეალურ მოწყობილობაზე გამოცდა და ატვირთვა Store-ში.",
        details: "Testing, Crashlytics, Play Store და App Store-ის წესები.",
        resource: "https://developer.apple.com/testflight/",
        category: "tools",
        estimatedTime: "2-4 დღე",
      },
    ],
  },
};

import { Brain, Globe, Lock, LucideIcon } from "lucide-react";

export type Step = {
  title: string;
  description: string;
  details?: string;
  resource?: string;
  category?: "fundamentals" | "tools" | "frameworks" | "backend" | "security";
  estimatedTime?: string;
  bigDescription?: string;
  youtubeSrc?: string;
};

type Topic = {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  roadmap: Record<string, Step>;
};

export const topics: Record<string, Topic> = {
  "computer-architecture": {
    title: "კომპიუტერის არქიტექტურა და საოპერაციო სისტემები",
    description: "გაიგე როგორ მუშაობს კომპიუტერი შიგნიდან",
    icon: Brain,
    color: "bg-gray-700",
    roadmap: {
      "cpu-and-memory-architecture": {
        title: "CPU და მეხსიერება",
        description: "გაიგე კომპიუტერის ძირითადი კომპონენტები",
        details:
          "CPU, RAM, რეგისტრები, instruction cycle და cache-ის მნიშვნელობა.",
        resource: "/roadmap/computer-architecture/cpu-and-memory-architecture/",
        category: "fundamentals",
        estimatedTime: "3-5 დღე",
        youtubeSrc:
          "https://www.youtube.com/embed/dWGujFI4AYQ?si=oijqg_iSNbzBTV95",
        bigDescription:
          "ცენტრალური პროცესორი, ანუ CPU, არის კომპიუტერის ძირითადი ნაწილი, რომელიც პასუხისმგებელია ყველა გამოთვლითი ოპერაციის შესრულებაზე. ის განიხილება როგორც კომპიუტერის „ტვინი“, რადგან მის გარეშე პროგრამების ან ოპერაციული სისტემის მუშაობა წარმოუდგენელია. CPU მუშაობს საათის სიხშირით, რომელიც ზომაში აღინიშნება გიგაჰერცებში და აღნიშნავს, რამდენ ოპერაციას ასრულებს CPU ერთ წამში. მისი ძირითადი ნაწილებია არითმულ-ლოგიკური ერთეული (ALU), რომელიც ასრულებს მათემატიკურ და ლოგიკურ ოპერაციებს, და მართვის ერთეული (CU), რომელიც განსაზღვრავს, როგორ და რა თანმიმდევრობით შესრულდეს ინსტრუქციები. ასევე, CPU-ს შიგნით განთავსებულია რეგისტრები, რომლებიც მცირე მოცულობის, მაგრამ ძალიან სწრაფი მეხსიერების უჯრედებია და დროებით ინახავენ მონაცემებს და ინსტრუქციებს.\n" +
          "\n" +
          "CPU-ის მუშაობის პროცესში არსებობს მნიშვნელოვანი ცნება, სახელად ინსტრუქციის ციკლი. ის მოიცავს ინსტრუქციის წაკითხვას მეხსიერებიდან, მისი დეკოდირებას და საბოლოოდ, შესრულებას. ეს ციკლი მეორდება სწრაფად და უწყვეტად, რათა პროგრამებმა იმუშაონ სწორად და ეფექტურად.\n" +
          "\n" +
          "CPU-ის მხარდასაჭერად აუცილებელია მეხსიერების არქიტექტურა, რომელიც უზრუნველყოფს მონაცემებისა და ინსტრუქციების სწორად და დროულად მიწოდებას. მეხსიერება მრავალფენიანია: ყველაზე სწრაფია რეგისტრები, შემდეგ მოდის cache მეხსიერება, რომელიც CPU-სთან ახლოს მდებარეობს და მნიშვნელოვნად ამცირებს წვდომის დროს. შემდეგია RAM — ოპერატიული მეხსიერება, რომელიც ინახავს პროგრამებს და მონაცემებს, როცა ისინი აქტიურად გამოიყენება. RAM არასტაბილურია და კომპიუტერის გათიშვის შემდეგ მასში არსებული ინფორმაცია იშლება. არსებობს ასევე მუდმივი მეხსიერება, როგორიცაა ROM, SSD და HDD, რომლებიც გამოიყენება გრძელვადიანი შენახვისთვის.\n" +
          "\n" +
          "როდესაც პროგრამა მუშაობს, CPU რეგისტრებიდან იღებს პირველადი მონაცემებს, საჭიროების შემთხვევაში იყენებს cache-ს, შემდეგ RAM-დან კითხულობს დამატებით ინფორმაციას და მხოლოდ ბოლოს მიმართავს მუდმივ მეხსიერებას. CPU და მეხსიერება მუშაობენ ერთად, რათა შესაძლებელი გახდეს სწრაფი და ეფექტური გამოთვლითი პროცესები. მათი სწორად მუშაობა კომპიუტერის საერთო წარმადობისთვის გადამწყვეტია. CPU-ის სწრაფი წვდომა მეხსიერებაზე და მეხსიერების სწორი სტრუქტურა განსაზღვრავს, რამდენად ეფექტურად შეძლებს სისტემა მუშაობას მრავალფეროვან ამოცანებზე.",
      },
      "operating-system-architecture": {
        title: "საოპერაციო სისტემის საფუძვლები",
        description: "როგორ მართავს OS პროცესებს და რესურსებს",
        details:
          "პროცესები, თრედები, multitasking, schedulers და memory management.",
        resource:
          "/roadmap/computer-architecture/operating-system-architecture/",
        category: "fundamentals",
        estimatedTime: "3-5 დღე",
      },
    },
  },
  "theory-of-computation": {
    title: "გამოთვლადობის თეორია",
    description: "გამოთვლადობის საზღვრები და ალგორითმების თეორიული საფუძვლები",
    icon: Brain,
    color: "bg-blue-800",
    roadmap: {
      "automata-and-languages": {
        title: "ავტომატები და ენა",
        description: "დაიწყე ავტომატების თეორიით",
        details:
          "Finite State Machines (FSM), Regular expressions, და ციფრული ენები.",
        resource: "/roadmap/theory-of-computation/automata-and-languages/",
        category: "fundamentals",
        estimatedTime: "2-3 დღე",
      },
      "turing-machines-and-computability": {
        title: "გამოთვლადობა და Turing მანქანები",
        description: "შესაძლებელია თუ არა ამ ამოცანის ამოხსნა?",
        details: "Turing Machines, Halting Problem და Church-Turing thesis.",
        resource:
          "/roadmap/theory-of-computation/turing-machines-and-computability/",
        category: "fundamentals",
        estimatedTime: "3-5 დღე",
      },
    },
  },
  "software-engineering": {
    title: "პროგრამული უზრუნველყოფის ინჟინერია",
    description: "ისწავლე როგორ ავაშენოთ დიდი და სტაბილური სისტემები",
    icon: Brain,
    color: "bg-cyan-600",
    roadmap: {
      "version-control": {
        title: "ვერსიის კონტროლი",
        description: "ისწავლე Git და GitHub-ს გამოყენება",
        details:
          "ბაზისური ბრძანებები, branch-ები, pull request-ები და თანამშრომლობა.",
        resource: "/roadmap/software-engineering/version-control/",
        category: "tools",
        estimatedTime: "2-3 დღე",
      },
      "unit-testing": {
        title: "ტესტირება და დებაგი",
        description: "როგორ ვამოწმოთ ჩვენი კოდი სწორად მუშაობს?",
        details: "Unit testing, integration testing, debugger-ების გამოყენება.",
        resource: "/roadmap/software-engineering/unit-testing/",
        category: "tools",
        estimatedTime: "2-3 დღე",
      },
    },
  },
  hci: {
    title: "ადამიანი-კომპიუტერის ინტერაქცია",
    description: "UX დიზაინი და ინტერფეისის აგების ფსიქოლოგია",
    icon: Brain,
    color: "bg-pink-600",
    roadmap: {
      "ux-and-ui-fundamentals": {
        title: "UX/UI საფუძვლები",
        description: "შექმენი მარტივად გამოსაყენებელი ინტერფეისები",
        details: "ცნებები: Feedback, Consistency, Affordance, Accessibility.",
        resource: "/roadmap/hci/ux-and-ui-fundamentals/",
        category: "fundamentals",
        estimatedTime: "2-3 დღე",
      },
      "usability-testing": {
        title: "ტესტირება და გაუმჯობესება",
        description:
          "მომხმარებლის ფიდბექის გამოყენება დიზაინის გაუმჯობესებისთვის",
        details: "Usability testing, A/B ტესტირება და ჰეპურისტიკული შეფასება.",
        resource: "/roadmap/hci/usability-testing/",
        category: "tools",
        estimatedTime: "1-2 დღე",
      },
    },
  },
  "web-development": {
    title: "ვებ განვითარების გზა",
    description: "გზამკვლევი ფრონტენდის, ბექენდის ან DevOps-ის კარიერისთვის",
    icon: Globe,
    color: "bg-purple-500",
    roadmap: {
      internet: {
        // Added slug
        title: "ინტერნეტი",
        description: "გაიგე, როგორ მუშაობს ინტერნეტი (DNS, HTTP, ბრაუზერები).",
        details:
          "შეისწავლე კლიენტი-სერვერის კომუნიკაცია, რა ხდება როცა URL-ს წერთ, და ისეთი ცნებები როგორებიცაა IP, TCP, HTTP.",
        resource: "/roadmap/web-development/internet",
        category: "fundamentals",
        estimatedTime: "1-2 დღე",
      },
      html: {
        // Added slug
        title: "HTML",
        description: "შეისწავლე ვებგვერდის სტრუქტურა HTML-ის გამოყენებით.",
        details:
          "მუშაობა სემანტიკურ თეგებზე, ფორმებზე, მედიის ჩასმასა და ხელმისაწვდომობაზე (ARIA).",
        resource: "/roadmap/web-development/html/",
        category: "fundamentals",
        estimatedTime: "2-3 დღე",
      },
      css: {
        // Added slug
        title: "CSS",
        description: "დასტილე გვერდი CSS-ის დახმარებით.",
        details:
          "ისწავლე სელექტორები, box model, Flex/Grid, მედია ქუერიები და ცვლადები.",
        resource: "/roadmap/web-development/css/",
        category: "fundamentals",
        estimatedTime: "3-5 დღე",
      },
      javascript: {
        // Added slug
        title: "JavaScript",
        description: "დამატე ლოგიკა და ინტერაქტივობა JavaScript-ით.",
        details:
          "ისწავლე ცვლადები, ციკლები, DOM მანიპულაცია, ES6+, async/await და fetch API.",
        resource: "/roadmap/web-development/javascript/",
        category: "fundamentals",
        estimatedTime: "1-2 კვირა",
      },
    },
  },
  "artificial-intelligence": {
    title: "ხელოვნური ინტელექტი და მანქანური სწავლა",
    description: "ისწავლე როგორ ფიქრობენ და სწავლობენ მანქანები",
    icon: Brain,
    color: "bg-indigo-600",
    roadmap: {
      "linear-algebra": {
        title: "ხაზობრივი ალგებრა",
        description: "გაიგე ვექტორები, მატრიცები და მათი ოპერაციები.",
        details:
          "ძირითადი ცნებები ნეირონულ ქსელებსა და მოდელებთან მუშაობისთვის.",
        resource: "/roadmap/artificial-intelligence/linear-algebra/",
        category: "fundamentals",
        estimatedTime: "3-5 დღე",
      },
      python: {
        title: "Python",
        description: "ისწავლე Python ხელოვნური ინტელექტისთვის.",
        details: "სინტაქსი, მონაცემთა სტრუქტურები, NumPy და Pandas.",
        resource: "/roadmap/artificial-intelligence/python/",
        category: "tools",
        estimatedTime: "1-2 კვირა",
      },
      "machine-learning": {
        title: "მანქანური სწავლების ალგორითმები",
        description:
          "გაიგე ძირითადი ალგორითმები: რეგრესია, კლასიფიკაცია და სხვ.",
        details:
          "სუპერვიზირებული და არასუპერვიზირებული სწავლა, გადაწყვეტილების ხეები, SVM, K-means.",
        resource: "/roadmap/artificial-intelligence/machine-learning/",
        category: "frameworks",
        estimatedTime: "1-2 კვირა",
      },
      "computer-vision": {
        title: "ნეირონული ქსელები",
        description: "ისწავლე ღრმა სწავლა ნეირონული ქსელების გამოყენებით.",
        details:
          "შეისწავლე forward/backpropagation, აქტივაციის ფუნქციები, CNN და RNN სტრუქტურები.",
        resource: "/roadmap/artificial-intelligence/computer-vision/",
        category: "frameworks",
        estimatedTime: "2-3 კვირა",
      },
    },
  },
  cybersecurity: {
    title: "კიბერუსაფრთხოება",
    description: "სიცოცხლეზე დამოკიდებული სისტემებისა და ქსელების დაცვა",
    icon: Lock,
    color: "bg-red-500",
    roadmap: {
      "internet-protocols-and-services": {
        title: "ქსელური საფუძვლები",
        description: "გაიგე IP, TCP, UDP, პორტები და DNS.",
        details: "ეს არის ის, თუ როგორ მოძრაობს ინფორმაცია ინტერნეტში.",
        resource: "/roadmap/cybersecurity/internet-protocols-and-services/",
        category: "fundamentals",
        estimatedTime: "2 დღე",
      },
      "cryptography-and-data-security": {
        title: "დაშიფვრა",
        description: "ისწავლე როგორ იცავს დაშიფვრა მონაცემებს.",
        details:
          "სიმეტრიული და ასიმეტრიული დაშიფვრა, SSL/TLS, ჰეშირების ალგორითმები.",
        resource: "/roadmap/cybersecurity/cryptography-and-data-security/",
        category: "security",
        estimatedTime: "2-4 დღე",
      },
      firewalls: {
        title: "ფაიერვოლები",
        description: "გაიგე როგორ მუშაობს ფაიერვოლი და როგორ იცავს სისტემებს.",
        details:
          "ტრეფიკის ფილტრაცია, წვდომის წესები, ფაიერვოლის ტიპები და მაგალითები.",
        resource: "/roadmap/cybersecurity/firewalls/",
        category: "security",
        estimatedTime: "1 დღე",
      },
      "threat-detection": {
        // Added slug
        title: "მუქარის აღმოჩენა",
        description: "მოიცანი მავნე ქცევები სისტემებსა და ქსელებში.",
        details:
          "IDS/IPS სისტემები, ანომალიების აღმოჩენა და ძირითადი ფორენზიკა.",
        resource: "/roadmap/cybersecurity/threat-detection/",
        category: "security",
        estimatedTime: "3-5 დღე",
      },
    },
  },
  "algorithms-data-structures": {
    title: "ალგორითმები და მონაცემთა სტრუქტურები",
    description: "ისწავლე პროგრამირების ლოგიკა და ეფექტური მონაცემთა მართვა",
    icon: Globe,
    color: "bg-orange-400",
    roadmap: {
      // Changed from array to object
      "variables-and-types": {
        // Added slug
        title: "ცვლადები და ტიპები",
        description:
          "გაიგე ცვლადების მნიშვნელობა და მონაცემთა ტიპების გამოყენება.",
        details:
          "ესაა პროგრამირების საფუძველი, რომელიც გამოიყენება ალგორითმების სწორად გასაგებად.",
        resource: "/roadmap/algorithms-data-structures/variables-and-types/",
        category: "fundamentals",
        estimatedTime: "1-2 დღე",
      },
      "array-and-linked-list": {
        title: "Array და Linked List",
        description: "ისწავლე მონაცემთა ჩამონათვალის ორი ძირითადი სტრუქტურა.",
        details:
          "განსხვავებები array-სა და linked list-ს შორის, მუშაობის პრინციპები და გამოყენების შემთხვევები.",
        resource: "/roadmap/algorithms-data-structures/array-and-linked-list/",
        category: "fundamentals",
        estimatedTime: "2-3 დღე",
      },
      "stack-and-queue": {
        title: "Stack და Queue",
        description: "მონაცემების მართვა წესრიგის მიხედვით.",
        details:
          "Stack (LIFO) და Queue (FIFO) სტრუქტურები გამოიყენება უამრავ ალგორითმში.",
        resource: "/roadmap/algorithms-data-structures/stack-and-queue/",
        category: "fundamentals",
        estimatedTime: "2 დღე",
      },
      "searching-and-sorting": {
        title: "ძებნა და სორტირება",
        description: "გაიცანი ეფექტური ძებნისა და სორტირების ალგორითმები.",
        details:
          "Binary Search, Bubble Sort, Merge Sort და მათი დროითი კომპლექსურობა.",
        resource: "/roadmap/algorithms-data-structures/searching-and-sorting/",
        category: "frameworks",
        estimatedTime: "2-4 დღე",
      },
    },
  },
  databases: {
    title: "მონაცემთა ბაზები",
    description: "ისწავლე მონაცემების შენახვა, მართვა და მანიპულაცია",
    icon: Globe,
    color: "bg-teal-500",
    roadmap: {
      "database-fundamentals": {
        // Added slug
        title: "მონაცემთა ბაზის საფუძვლები",
        description: "გაიგე რას ნიშნავს მონაცემთა ბაზა და როგორ მუშაობს.",
        details: "მონაცემთა ტიპები, სქემა და რელაციური სტრუქტურა.",
        resource: "/roadmap/databases/database-fundamentals/",
        category: "fundamentals",
        estimatedTime: "1-2 დღე",
      },
      sql: {
        title: "SQL",
        description: "ისწავლე მონაცემებზე წვდომის ენა SQL.",
        details:
          "SELECT, INSERT, UPDATE, DELETE — ძირითადი ოპერაციები რელაციურ ბაზებში.",
        resource: "/roadmap/databases/sql/",
        category: "tools",
        estimatedTime: "2-4 დღე",
      },
      "indexes-and-normalization": {
        title: "ინდექსები და ნორმალიზაცია",
        description: "გაუმჯობესე მონაცემთა ბაზის ეფექტურობა.",
        details:
          "ნორმალიზაციის დონეები და ინდექსების სტრატეგიები მონაცემების სწრაფად მოსაძებნად.",
        resource: "/roadmap/databases/indexes-and-normalization/", // This resource points to NoSQL, consider if intentional
        category: "tools",
        estimatedTime: "2 დღე",
      },
      nosql: {
        title: "NoSQL",
        description: "გაიგე როდის და რატომ გამოიყენება NoSQL (მაგ. MongoDB).",
        details: "დოკუმენტური, Key-Value, Column Store და Graph ტიპის ბაზები.",
        resource: "/roadmap/databases/nosql/",
        category: "tools",
        estimatedTime: "2-3 დღე",
      },
    },
  },
  "mobile-development": {
    title: "მობაილ დეველოპმენტი",
    description:
      "ისწავლე როგორ შეიქმნას მძლავრი აპლიკაციები iOS და Android-სთვის",
    icon: Globe,
    color: "bg-emerald-500",
    roadmap: {
      "mobile-platform-introduction": {
        // Added slug
        title: "მობილური პლატფორმების გაცნობა",
        description: "გაიგე განსხვავება iOS და Android-ს შორის.",
        details: "სისტემის არქიტექტურა, Store წესები და ძირითადი კომპონენტები.",
        resource: "/roadmap/mobile-development/mobile-platform-introduction/",
        category: "fundamentals",
        estimatedTime: "1 დღე",
      },
      flutter: {
        title: "Flutter",
        description: "დაწერე მობილური აპები Dart ენით.",
        details:
          "Flutter-ს გამოყენებით ერთ აპში შეგიძლია შექმნა ორივე პლატფორმისთვის თავსებადი აპლიკაცია.",
        resource: "/roadmap/mobile-development/flutter/",
        category: "frameworks",
        estimatedTime: "1-2 კვირა",
      },
      "react-native": {
        title: "React Native",
        description: "მობილური აპების შექმნა React-ის ცოდნის საფუძველზე.",
        details: "Reusable კომპონენტები, Expo, Navigation და API call-ები.",
        resource: "/roadmap/mobile-development/react-native/",
        category: "frameworks",
        estimatedTime: "1-2 კვირა",
      },
      "deploy-and-testing": {
        title: "დეპლოი და ტესტირება",
        description: "აპის რეალურ მოწყობილობაზე გამოცდა და ატვირთვა Store-ში.",
        details: "Testing, Crashlytics, Play Store და App Store-ის წესები.",
        resource: "/roadmap/mobile-development/deploy-and-testing/",
        category: "tools",
        estimatedTime: "2-4 დღე",
      },
    },
  },
};

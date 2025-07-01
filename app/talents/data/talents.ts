export interface Talent {
  firstName: string;
  lastName: string;
  introduction: string;
  experience: string;
  skills: string[];
}

const talents = [
  {
    firstName: "ლევან",
    lastName: "ბოხუა",
    introduction:
      "ფრონტენდ დეველოპერი, რომელიც მოტივირებულია სწავლაზე და პრაქტიკაზე.",
    experience: "2 წლიანი გამოცდილება React და Next.js-ში.",
    skills: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    email: "levan@devmail.com",
  },
  {
    firstName: "ნინო",
    lastName: "მგელაძე",
    introduction:
      "UI/UX დიზაინერი, რომელიც ქმნის მოსახერხებელ და მიმზიდველ დიზაინს.",
    experience: "4 წლიანი გამოცდილება დიზაინში და მომხმარებლის კვლევაში.",
    skills: ["Figma", "UX კვლევა", "პროტოტიპი", "მობილური დიზაინი"],
    email: "nino@designhub.ge",
  },
  {
    firstName: "საბა",
    lastName: "გოგოლაძე",
    introduction:
      "დევოპს ინჟინერი, რომელიც ქმნის ავტომატიზაციას და სტაბილურ ინფრასტრუქტურას.",
    experience: "5 წლიანი გამოცდილება AWS-სა და CI/CD სისტემებში.",
    skills: ["Docker", "Kubernetes", "AWS", "CI/CD"],
    email: "saba@cloudworks.io",
  },
  {
    firstName: "ანასტასია",
    lastName: "კვირკველია",
    introduction: "მცირე AI პროექტებზე მომუშავე მონაცემთა მეცნიერი.",
    experience: "2 წლიანი გამოცდილება TensorFlow და NLP მოდელებში.",
    skills: ["Python", "TensorFlow", "Pandas", "NLP"],
    email: "anastasia@mlspace.ai",
  },
  {
    firstName: "თემური",
    lastName: "მაჩაბელი",
    introduction:
      "საიტის უსაფრთხოების სპეციალისტი, ფოკუსირებული OWASP და პენტესტებზე.",
    experience: "3 წელი უსაფრთხოების აუდიტებში და არქიტექტურაში.",
    skills: ["კიბერუსაფრთხოება", "პენეტრაციის ტესტირება", "OWASP", "Linux"],
    email: "temuri@cyberguard.ge",
  },
  {
    firstName: "ეკატერინე",
    lastName: "კილაძე",
    introduction: "მარტივი გამოსაყენებელი აპლიკაციების დიზაინის სპეციალისტი.",
    experience: "3 წლიანი გამოცდილება დიზაინის სისტემების შექმნაში.",
    skills: ["UI დიზაინი", "Figma", "Component Libraries", "Accessibility"],
    email: "eka@uxflow.dev",
  },
];

export default talents;

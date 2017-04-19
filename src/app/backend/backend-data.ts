import { InMemoryDbService } from 'angular-in-memory-web-api';


/**
 * In Memory database
 * api/users returns users
 * api/employees returns employees
 */
export class BackendData implements InMemoryDbService {

  createDb(): {} {
    const users = [
      {
        id: 1,
        name: 'Mark Westenberg',
        image: 'assets/images/Mark-Westenberg.jpg',
        username: 'info@markwestenberg.nl',
        password: 'test1234',
        job_role: 'Developer',
        token: '',
      },
      {
        id: 2,
        name: 'Walter van Berkel',
        image: 'assets/images/Walter-berkel-trivento.jpg',
        username: 'trivento@trivento.nl',
        password: 'Trivento',
        job_role: 'HR Manager',
        token: '',
      }

    ];

    const employees = [
      {
        id: 1,
        first_name: 'Laura',
        last_name: 'Hamilton',
        email: 'lhamilton0@bizjournals.com',
        gender: 'Female',
        address: '815 Pankratz Court',
        job_role: 'Assistant Professor'
      },
      {
        id: 2,
        first_name: 'Carl',
        last_name: 'Lopez',
        email: 'clopez1@seesaa.net',
        gender: 'Male',
        address: '8 Mockingbird Junction',
        job_role: 'Registered Nurse'
      },
      {
        id: 3,
        first_name: 'Timothy',
        last_name: 'Harper',
        email: 'tharper2@archive.org',
        gender: 'Male',
        address: '9 Summerview Drive',
        job_role: 'Web Designer IV'
      },
      {
        id: 4,
        first_name: 'Debra',
        last_name: 'Collins',
        email: 'dcollins3@google.ca',
        gender: 'Female',
        address: '04199 Corry Park',
        job_role: 'Database Administrator II'
      },
      {
        id: 5,
        first_name: 'Marie',
        last_name: 'Webb',
        email: 'mwebb4@usda.gov',
        gender: 'Female',
        address: '92349 Springs Drive',
        job_role: 'VP Sales'
      },
      {
        id: 6,
        first_name: 'Benjamin',
        last_name: 'Jordan',
        email: 'bjordan5@samsung.com',
        gender: 'Male',
        address: '5 Bonner Terrace',
        job_role: 'Dental Hygienist'
      },
      {
        id: 7,
        first_name: 'Christine',
        last_name: 'Webb',
        email: 'cwebb6@miibeian.gov.cn',
        gender: 'Female',
        address: '4108 Wayridge Pass',
        job_role: 'Nuclear Power Engineer'
      },
      {
        id: 8,
        first_name: 'Alan',
        last_name: 'Adams',
        email: 'aadams7@addthis.com',
        gender: 'Male',
        address: '70 Trailsway Crossing',
        job_role: 'Physical Therapy Assistant'
      },
      {
        id: 9,
        first_name: 'Helen',
        last_name: 'Romero',
        email: 'hromero8@google.cn',
        gender: 'Female',
        address: '8785 Fieldstone Terrace',
        job_role: 'Senior Quality Engineer'
      },
      {
        id: 10,
        first_name: 'Jane',
        last_name: 'Henry',
        email: 'jhenry9@deviantart.com',
        gender: 'Female',
        address: '29 Havey Circle',
        job_role: 'Database Administrator I'
      },
      {
        id: 11,
        first_name: 'Marilyn',
        last_name: 'Carter',
        email: 'mcartera@yolasite.com',
        gender: 'Female',
        address: '0 Kinsman Place',
        job_role: 'Engineer II'
      },
      {
        id: 12,
        first_name: 'Mildred',
        last_name: 'Ray',
        email: 'mrayb@xing.com',
        gender: 'Female',
        address: '7 Ridge Oak Street',
        job_role: 'Marketing Manager'
      },
      {
        id: 13,
        first_name: 'Patricia',
        last_name: 'Kennedy',
        email: 'pkennedyc@slashdot.org',
        gender: 'Female',
        address: '462 Heffernan Junction',
        job_role: 'Computer Systems Analyst III'
      },
      {
        id: 14,
        first_name: 'Roy',
        last_name: 'Hill',
        email: 'rhilld@uol.com.br',
        gender: 'Male',
        address: '1572 Hansons Court',
        job_role: 'Account Representative I'
      },
      {
        id: 15,
        first_name: 'Frank',
        last_name: 'Gordon',
        email: 'fgordone@globo.com',
        gender: 'Male',
        address: '1999 Golf Trail',
        job_role: 'Research Assistant I'
      },
      {
        id: 16,
        first_name: 'Sharon',
        last_name: 'Hunt',
        email: 'shuntf@goodreads.com',
        gender: 'Female',
        address: '19 Summit Avenue',
        job_role: 'Research Nurse'
      },
      {
        id: 17,
        first_name: 'Bruce',
        last_name: 'Lawrence',
        email: 'blawrenceg@nhs.uk',
        gender: 'Male',
        address: '41034 Forster Hill',
        job_role: 'Automation Specialist III'
      },
      {
        id: 18,
        first_name: 'Jennifer',
        last_name: 'Simmons',
        email: 'jsimmonsh@networkadvertising.org',
        gender: 'Female',
        address: '23 Walton Way',
        job_role: 'General Manager'
      },
      {
        id: 19,
        first_name: 'Susan',
        last_name: 'Robertson',
        email: 'srobertsoni@behance.net',
        gender: 'Female',
        address: '88003 Jay Street',
        job_role: 'Developer I'
      },
      {
        id: 20,
        first_name: 'Diana',
        last_name: 'Porter',
        email: 'dporterj@ehow.com',
        gender: 'Female',
        address: '7 Waubesa Alley',
        job_role: 'Environmental Tech'
      },
      {
        id: 21,
        first_name: 'Teresa',
        last_name: 'Barnes',
        email: 'tbarnesk@gnu.org',
        gender: 'Female',
        address: '80268 Schmedeman Road',
        job_role: 'Sales Representative'
      },
      {
        id: 22,
        first_name: 'Jennifer',
        last_name: 'Hart',
        email: 'jhartl@netvibes.com',
        gender: 'Female',
        address: '5305 Russell Street',
        job_role: 'Research Assistant III'
      },
      {
        id: 23,
        first_name: 'Carl',
        last_name: 'Alvarez',
        email: 'calvarezm@yandex.ru',
        gender: 'Male',
        address: '02 Carey Pass',
        job_role: 'Account Coordinator'
      },
      {
        id: 24,
        first_name: 'Marilyn',
        last_name: 'Stephens',
        email: 'mstephensn@scientificamerican.com',
        gender: 'Female',
        address: '384 Pankratz Crossing',
        job_role: 'Health Coach I'
      },
      {
        id: 25,
        first_name: 'Katherine',
        last_name: 'Boyd',
        email: 'kboydo@vkontakte.ru',
        gender: 'Female',
        address: '997 Badeau Drive',
        job_role: 'GIS Technical Architect'
      },
      {
        id: 26,
        first_name: 'Roger',
        last_name: 'West',
        email: 'rwestp@bandcamp.com',
        gender: 'Male',
        address: '57 Quincy Trail',
        job_role: 'Nuclear Power Engineer'
      },
      {
        id: 27,
        first_name: 'Lawrence',
        last_name: 'Burton',
        email: 'lburtonq@illinois.edu',
        gender: 'Male',
        address: '816 Blue Bill Park Way',
        job_role: 'Administrative Assistant II'
      },
      {
        id: 28,
        first_name: 'Jacqueline',
        last_name: 'Mason',
        email: 'jmasonr@blogs.com',
        gender: 'Female',
        address: '104 Sutherland Pass',
        job_role: 'Cost Accountant'
      },
      {
        id: 29,
        first_name: 'Lillian',
        last_name: 'Bell',
        email: 'lbells@nbcnews.com',
        gender: 'Female',
        address: '52320 Morningstar Pass',
        job_role: 'Developer III'
      },
      {
        id: 30,
        first_name: 'Nicholas',
        last_name: 'Shaw',
        email: 'nshawt@jalbum.net',
        gender: 'Male',
        address: '4 Crest Line Hill',
        job_role: 'Desktop Support Technician'
      },
      {
        id: 31,
        first_name: 'Jimmy',
        last_name: 'Cole',
        email: 'jcoleu@sakura.ne.jp',
        gender: 'Male',
        address: '6 Grasskamp Trail',
        job_role: 'Mechanical Systems Engineer'
      },
      {
        id: 32,
        first_name: 'Sarah',
        last_name: 'Stevens',
        email: 'sstevensv@salon.com',
        gender: 'Female',
        address: '56 Briar Crest Place',
        job_role: 'Food Chemist'
      },
      {
        id: 33,
        first_name: 'Christopher',
        last_name: 'Reed',
        email: 'creedw@examiner.com',
        gender: 'Male',
        address: '19798 Lakewood Gardens Avenue',
        job_role: 'Media Manager III'
      },
      {
        id: 34,
        first_name: 'Matthew',
        last_name: 'Ford',
        email: 'mfordx@dion.ne.jp',
        gender: 'Male',
        address: '5022 Valley Edge Center',
        job_role: 'Paralegal'
      },
      {
        id: 35,
        first_name: 'Nancy',
        last_name: 'Alexander',
        email: 'nalexandery@disqus.com',
        gender: 'Female',
        address: '81924 Raven Terrace',
        job_role: 'Community Outreach Specialist'
      },
      {
        id: 36,
        first_name: 'Emily',
        last_name: 'Gray',
        email: 'egrayz@dedecms.com',
        gender: 'Female',
        address: '15125 Utah Circle',
        job_role: 'Structural Engineer'
      },
      {
        id: 37,
        first_name: 'Wayne',
        last_name: 'Martinez',
        email: 'wmartinez10@constantcontact.com',
        gender: 'Male',
        address: '6056 Clyde Gallagher Circle',
        job_role: 'Operator'
      },
      {
        id: 38,
        first_name: 'Brenda',
        last_name: 'Perry',
        email: 'bperry11@google.ru',
        gender: 'Female',
        address: '9407 6th Hill',
        job_role: 'Environmental Tech'
      },
      {
        id: 39,
        first_name: 'Rebecca',
        last_name: 'Fox',
        email: 'rfox12@google.pl',
        gender: 'Female',
        address: '024 Buhler Place',
        job_role: 'Software Consultant'
      },
      {
        id: 40,
        first_name: 'Richard',
        last_name: 'Lawson',
        email: 'rlawson13@bbb.org',
        gender: 'Male',
        address: '56 Haas Street',
        job_role: 'Chief Design Engineer'
      },
      {
        id: 41,
        first_name: 'Heather',
        last_name: 'Harris',
        email: 'hharris14@spiegel.de',
        gender: 'Female',
        address: '3 Longview Point',
        job_role: 'Systems Administrator II'
      },
      {
        id: 42,
        first_name: 'Alice',
        last_name: 'Martinez',
        email: 'amartinez15@photobucket.com',
        gender: 'Female',
        address: '4 Melby Way',
        job_role: 'Social Worker'
      },
      {
        id: 43,
        first_name: 'Russell',
        last_name: 'Collins',
        email: 'rcollins16@nba.com',
        gender: 'Male',
        address: '4 Hermina Street',
        job_role: 'Web Developer I'
      },
      {
        id: 44,
        first_name: 'Mark',
        last_name: 'Patterson',
        email: 'mpatterson17@sfgate.com',
        gender: 'Male',
        address: '4949 North Place',
        job_role: 'Engineer I'
      },
      {
        id: 45,
        first_name: 'Margaret',
        last_name: 'Walker',
        email: 'mwalker18@networkadvertising.org',
        gender: 'Female',
        address: '60 Rusk Drive',
        job_role: 'VP Sales'
      },
      {
        id: 46,
        first_name: 'Paul',
        last_name: 'Hunter',
        email: 'phunter19@businesswire.com',
        gender: 'Male',
        address: '709 Spenser Lane',
        job_role: 'VP Product Management'
      },
      {
        id: 47,
        first_name: 'Jesse',
        last_name: 'Grant',
        email: 'jgrant1a@over-blog.com',
        gender: 'Male',
        address: '57 Fuller Plaza',
        job_role: 'Structural Engineer'
      },
      {
        id: 48,
        first_name: 'Kelly',
        last_name: 'Fowler',
        email: 'kfowler1b@w3.org',
        gender: 'Female',
        address: '77 Eagle Crest Place',
        job_role: 'Electrical Engineer'
      },
      {
        id: 49,
        first_name: 'Christopher',
        last_name: 'Burns',
        email: 'cburns1c@state.tx.us',
        gender: 'Male',
        address: '46 Michigan Place',
        job_role: 'Professor'
      },
      {
        id: 50,
        first_name: 'Martin',
        last_name: 'Warren',
        email: 'mwarren1d@cornell.edu',
        gender: 'Male',
        address: '23697 Ryan Road',
        job_role: 'Recruiter'
      }
    ];

    return {users: users, employees: employees};

  }





}

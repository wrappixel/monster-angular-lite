export interface Project {
    trClass: string;
    tdWidth: string,
    spanClass: string;
    spanLetter: string;
    image: string;
    name: string;
    designation: string;
    project: string;
    budget: number;
}


export const monthlyProject: Project[] = [


    {
        trClass: '',
        tdWidth: 'width:50px',
        spanClass: 'round',
        spanLetter: 'S',
        image: '',
        name: 'Sunil Joshi',
        designation: 'Web Designer',
        project: 'Elite Admin',
        budget: 3.9
    },
    {
        trClass: '',
        tdWidth: '',
        spanClass: 'round',
        spanLetter: '',
        image: 'assets/images/users/2.jpg',
        name: 'Andrew',
        designation: 'Project Manager',
        project: 'Real Homes',
        budget: 23.9
    },
    {
        trClass: '',
        tdWidth: 'width:50px',
        spanClass: 'round round-success',
        spanLetter: 'B',
        image: '',
        name: 'Bhavesh patel',
        designation: 'Developer',
        project: 'MedicalPro Theme',
        budget:12.9
    },
    {
        trClass: '',
        tdWidth: 'width:50px',
        spanClass: 'round round-primary',
        spanLetter: 'N',
        image: '',
        name: 'Nirav Joshi',
        designation: 'Web Designer',
        project: 'Frontend Eng',
        budget:10.9
    },
    {
        trClass: '',
        tdWidth: '',
        spanClass: 'round round-warning',
        spanLetter: 'M',
        image: '',
        name: 'Micheal Doe',
        designation: 'Content Writer',
        project: 'Helping Hands',
        budget: 3.9
    },
    {
        trClass: '',
        tdWidth: '',
        spanClass: 'round round-danger',
        spanLetter: 'J',
        image: '',
        name: 'Johnathan',
        designation: 'Graphic',
        project: 'Digital Agency',
        budget: 2.6
    },



]
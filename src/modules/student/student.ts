//Domain : Category

type StudentDomainProps = {
    id: number,
    firstname: string,
    lastname: string
}

interface IStudent {
    id: number
    firstname: string
    lastname: string
}

export class Student implements IStudent {
    public id: number
    public firstname: string
    public lastname: string

    constructor(props: StudentDomainProps) {
        this.id = props.id
        this.firstname = props.firstname
        this.lastname = props.lastname
    }
}
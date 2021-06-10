//Domain : Category

type levelDomainProps = {
    id: number,
    number: number,
    name: string
}

interface ILevel {
    id: number
    name: string
}

export class Level implements ILevel {
    public id: number
    public name: string
    public number: number

    constructor(props: levelDomainProps) {
        this.id = props.id
        this.number = props.number
        this.name = props.name
    }
}
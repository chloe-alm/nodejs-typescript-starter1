import { validate } from 'class-validator';
import { parseError } from '../utils/parseClassValidatorError'

export interface IAbsractDto {
    isValid(instance: object): Promise<any>;
}


export abstract class AbstractDto implements IAbsractDto {

    //verifier si l instance est valide
    public async isValid(instance: object): Promise<any> {
        return parseError(await validate(instance))
    }
}
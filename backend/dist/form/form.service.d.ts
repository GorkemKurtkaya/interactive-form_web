/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Model } from 'mongoose';
import { Form, FormDocument } from './schemas/form.schema';
import { Question, QuestionDocument } from './schemas/question.schema';
import { Option, OptionDocument } from './schemas/option.schema';
import { User } from './schemas/user';
export declare class FormService {
    private formModel;
    private questionModel;
    private optionModel;
    private readonly userModel;
    constructor(formModel: Model<FormDocument>, questionModel: Model<QuestionDocument>, optionModel: Model<OptionDocument>, userModel: Model<User>);
    createForm(name: string, description: string): Promise<Form>;
    deleteForm(formId: number): Promise<Form>;
    editForm(formId: string, name: string, description: string): Promise<Form>;
    addQuestion(formId: string, title: string, description: string, questionType: string): Promise<Form>;
    getAllForms(): Promise<Form[]>;
    getFormDetails(formId: string): Promise<Form>;
    createRestrictedForm(adminId: string, name: string, description: string): Promise<Form>;
    private isAdminUser;
    getQuestions(formId: string): Promise<Question[]>;
    getOptions(formId: string): Promise<Option[]>;
    saveAnswer(formId: string, questionId: string, userId: string, stars: number, answer: string): Promise<Question>;
    createUserAndAddToForm(name: string, formId: string): Promise<User>;
    deleteQuestion(formId: string, questionId: string): Promise<Question>;
    getUsers(formId: string): Promise<User[]>;
    getQuestionDetails(formId: string, questionId: string): Promise<Question>;
    deleteUser(formId: string, userId: string): Promise<User>;
}

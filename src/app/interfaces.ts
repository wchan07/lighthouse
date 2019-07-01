export interface IPapaResult {
  data: IEmployee[];
  errors: any;
  meta: IPapaMeta;
}

export interface IPapaMeta {
  aborted: boolean;
  cursor: number;
  delimiter: string;
  fields: string[];
  linebreak: string;
  truncated: boolean;
}

export interface IEmployee {
  email: string;
  fax: string;
  first: string;
  last: string;
  middle: string;
  name: string;
  person_ID: string;
  phone: string;
  title: string;
}

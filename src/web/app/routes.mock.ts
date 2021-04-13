import { from } from 'rxjs';

export class NgSeedRouteMock {

    snapshot = {
        queryParams: {},
        url: [],
        paramMap: {
            get: (key: string) => null
        }
    };

    params = from([]);
    data = from([]);

    pathFromRoot = [
        {
            data: { Title: 'Ng Seed' }
        }
    ];

    queryParams = from([]);
}

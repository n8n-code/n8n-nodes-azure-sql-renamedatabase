import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureSqlRenamedatabaseApi implements ICredentialType {
        name = 'N8nDevAzureSqlRenamedatabaseApi';

        displayName = 'Azure SQL Renamedatabase API';

        icon: Icon = { light: 'file:../nodes/AzureSqlRenamedatabase/azure-sql-renamedatabase.png', dark: 'file:../nodes/AzureSqlRenamedatabase/azure-sql-renamedatabase.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure SQL Renamedatabase API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}

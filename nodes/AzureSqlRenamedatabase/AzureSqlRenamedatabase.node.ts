import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureSqlRenamedatabase implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Azure SQL Renamedatabase',
                name: 'N8nDevAzureSqlRenamedatabase',
                icon: { light: 'file:./azure-sql-renamedatabase.png', dark: 'file:./azure-sql-renamedatabase.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Azure SQL Database REST API manages database services.',
                defaults: { name: 'Azure SQL Renamedatabase' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAzureSqlRenamedatabaseApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
                ],
        };
}

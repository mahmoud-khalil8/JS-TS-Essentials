//singelton pattern
//usage: when you want to have only one instance of a class
class ConfigManager {
    databaseConfig: object;
    apiKey: string;
    static instance: ConfigManager;
    // Private constructor to prevent instantiation
    private constructor() {
        this.databaseConfig = {};
        this.apiKey = "api key";
    }

    // Static method to get the single instance of the class
    public static getInstance(): ConfigManager {
        if (!ConfigManager.instance) {
            ConfigManager.instance = new ConfigManager();
        }
        return ConfigManager.instance;
    }

    // Method to get database configuration
    public getDatabaseConfig(): object {
        return this.databaseConfig;
    }

    // Method to get API key
    public getApiKey(): string {
        return this.apiKey;
    }
}

// Usage
const configManager = ConfigManager.getInstance();
const databaseConfig = configManager.getDatabaseConfig();
const apiKey = configManager.getApiKey();


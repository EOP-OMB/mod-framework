export class UserControlProperties {
    public name: string;

    public fieldGroup: string;
    public required: boolean;

    // Display
    public label: string;
    public displayFormat: string;
    
    public helpText: string;
    public helpTextFormat: string;

    public defaultValue: string = '';
    public placeholderText: string = '';
    public toolTip: string;
    public displayRows: string;

    public selectOptions: string;

    // String values
    public maxLength: number;
    public regex: string;

    // Numeric values
    public minValue: number;
    public maxValue: number;

    // Date values.
    public minDate: string; // Must be parseable by Date.parse().
    public maxDate: string; // Must be parseable by Date.parse().

    // Custom values  
    public customValidationCriteria: string;

    public readOnly: boolean;

    // Define attributes related to constraints.
    public constraintName: string;
    public constraintJson: string;
    
    public assignFrom(cloneObj: any): any {
        for (var attribut in cloneObj) {
            this[attribut] = cloneObj[attribut];
        }

        return this;
    }

    public static ParseSelectOptions(properties: UserControlProperties): string[] {
        var arrSelectOptions: string[] = [];

        if ((properties.selectOptions !== undefined) &&
            (properties.selectOptions !== null) &&
            (properties.selectOptions.trim() !== '')) {
            arrSelectOptions = properties.selectOptions.split('|');
        }

        return (arrSelectOptions);
    }
}

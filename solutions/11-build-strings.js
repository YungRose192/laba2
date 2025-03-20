// BEGIN
const buildDefinitionList = (definitions) => {
    if (!Array.isArray(definitions) || definitions.length === 0) {
        return '';
    }
    let html = '<dl>';
    for (const [term, description] of definitions) {
        if (typeof term === 'string' && typeof description === 'string') {
            html += `<dt>${term}</dt><dd>${description}</dd>`;
        }
    }
    html += '</dl>';

    return html;
};
export default buildDefinitionList;
// END
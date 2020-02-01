import Health     from './views/Health';
import Finance    from './views/Finance';
import Learning   from './views/Learning';
import Automation from './views/Automation';
import Opensource from './views/Opensource';

const AppRoutes = [
    {
        "title"         : "Health",
        "subtitle"      : '',
        "symbol"        : "la-hearbeat",
        "location_slug" : '',
        "component"     : Health
    },
    {
        "title"         : "Learning",
        "subtitle"      : '',
        "symbol"        : "la-chalkboard-teacher",
        "location_slug" : "learning",
        "component"     : Learning
    },
    {
        "title"         : "Automation",
        "subtitle"      : '',
        "symbol"        : "la-robot",
        "location_slug" : "automation",
        "component"     : Automation
    },
    {
        "title"         : "Open Source",
        "subtitle"      : '',
        "symbol"        : "la-globe",
        "location_slug" : "opensource",
        "component"     : Opensource
    },
    {
        "title"         : "Finance",
        "subtitle"      : '',
        "symbol"        : "la-wallet",
        "location_slug" : "finance",
        "component"     : Finance
    }
];

export default AppRoutes;

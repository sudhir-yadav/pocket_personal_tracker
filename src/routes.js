import Health     from './views/Health';
import Finance    from './views/Finance';
import Learning   from './views/Learning';
import Automation from './views/Automation';
import Opensource from './views/Opensource';

const AppRoutes = [
    {
        "title"         : "Health",
        "subtitle"      : null,
        "symbol"        : "la-hearbeat",
        "location-slug" : null,
        "component"     : Health
    },
    {
        "title"         : "Learning",
        "subtitle"      : null,
        "symbol"        : "la-chalkboard-teacher",
        "location-slug" : "learning",
        "component"     : Finance
    },
    {
        "title"         : "Automation",
        "subtitle"      : null,
        "symbol"        : "la-robot",
        "location-slug" : "automation",
        "component"     : Learning
    },
    {
        "title"         : "Open Source",
        "subtitle"      : null,
        "symbol"        : "la-globe",
        "location-slug" : "opensource",
        "component"     : Automation
    },
    {
        "title"         : "Finance",
        "subtitle"      : null,
        "symbol"        : "la-wallet",
        "location-slug" : "finance",
        "component"     : Opensource
    }
];

export default AppRoutes;

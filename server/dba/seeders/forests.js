const forests = [
  {
    id: 1,
    forest_name: 'Idaho Panhandle National Forest',
    forest_url: 'https://www.fs.usda.gov/ipnf/',
    start_date: '2019-11-18T08:00:00Z',
    end_date: '2019-12-25T08:59:59Z',
    created: 'now()',
    updated: 'now()',
    org_structure_code: '11-01-04',
    description: 'Idaho Panhandle | Idaho',
    forest_abbr: 'ipnf',
    wood_cost: 5.00,
    min_cords: 4,
    max_cords: 12,
    timezone: 'America/Boise',
    cutting_areas: '{}',
    map_links: '{}',
    contact:
    '{ "Idaho Panhandle Supervisors Office": {"address": "3815 Schreiber Way", "citystate": "Coeur d AudioListener, ID", "phone": "(208) 765-7223"},',
    poss_financial_id: '999900018',
    districts:
    '{'
    + '"COEUR D ALENE RIVER": {"code": "03", "name": "Couer D Alene River"},'
    + '"ST. JOE": {"code": "04", "name": "St. Joe"},'
    + '"SANDPOINT": {"code": "06", "name": "Sandpoint"},'
    + '"BONNERS FERRY": {"code": "07", "name": "Bonners Ferry"},'
    + '"PRIEST LAKE": {"code": "08", "name": "Priest Lake"}'
    + '}',
    state: 'Idaho',
    permit_type: 'fuel',
    region: 1
  },
  {
    id: 2,
    forest_name: 'Flathead National Forest',
    forest_url: 'https://www.fs.usda.gov/flathead/',
    start_date: '2020-04-01T08:00:00Z',
    end_date: '2021-03-31T08:59:59Z',
    created: 'now()',
    updated: 'now()',
    org_structure_code: '11-01-10',
    description: 'Flathead | Montana',
    forest_abbr: 'flathead',
    wood_cost: 5.00,
    min_cords: 4,
    max_cords: 12,
    timezone: 'America/Boise',
    cutting_areas: '{}',
    map_links: '{}',
    contact:
    '{ "Flathead Supervisors Office / Tally Lake Ranger District": {"address": "650 Wolfpack Way", "citystate": "Kalispell, Montana", "phone": "(406) 758-5204"},',
    poss_financial_id: '999900019',
    state: 'Montana',
    permit_type: 'fuel',
    region: 1
  },
  {
    id: 3,
    forest_name: 'Chattahoochee-Oconee National Forest',
    forest_url: 'https://www.fs.usda.gov/conf',
    start_date: '2020-01-01T08:00:00Z',
    end_date: '2021-12-31T08:59:59Z',
    created: 'now()',
    updated: 'now()',
    org_structure_code: '11-08-03',
    description: 'Chattahoochee-Oconee | Georgia',
    forest_abbr: 'conf',
    wood_cost: 5.00,
    min_cords: 4,
    max_cords: 10,
    timezone: 'America/New York City',
    cutting_areas: '{}',
    map_links: '{}',
    contact:
    '',
    poss_financial_id: '999900021',
    districts:
    '{'
    + '"CONASUAGA": {"code": "01", "name": "Conasuaga"},'
    + '"BLUE RIDGE": {"code": "04", "name": "Blue Ridge"},'
    + '"CHATTOOGA RIVER": {"code": "06", "name": "Chattooga River"},'
    + '"OCONEE": {"code": "08", "name": "OCONEE"}'
    + '}',
    state: 'Georgia',
    permit_type: 'fuel',
    region: 8
  },
  {
    id: 4,
    forest_name: 'George Washington & Jefferson National Forest',
    forest_url: 'https://www.fs.usda.gov/gwj',
    start_date: '2020-01-01T08:00:00Z',
    end_date: '2021-12-31T08:59:59Z',
    created: 'now()',
    updated: 'now()',
    org_structure_code: '11-08-08',
    description: 'George Washington & Jefferson | Virginia',
    forest_abbr: 'gwj',
    wood_cost: 5.00,
    min_cords: 6,
    max_cords: 12,
    timezone: 'America/New York City',
    cutting_areas: '{}',
    map_links: '{}',
    contact:
    '',
    poss_financial_id: '999900020',
    state: 'Virginia',
    permit_type: 'fuel',
    region: 8
  },
  {
    id: 5,
    forest_name: 'Shoshone National Forest',
    forest_url: 'https://www.fs.usda.gov/shoshone',
    start_date: '2020-01-01T08:00:00Z',
    end_date: '2021-12-31T08:59:59Z',
    created: 'now()',
    updated: 'now()',
    org_structure_code: '11-02-14',
    description: 'Shoshone | Wyoming',
    forest_abbr: 'shoshone',
    wood_cost: 7.50,
    min_cords: 3,
    max_cords: 10,
    timezone: 'America/Boise',
    cutting_areas: '{}',
    map_links: '{}',
    contact:
    '',
    poss_financial_id: '999900023',
    state: 'Wyoming',
    permit_type: 'fuel',
    region: 2
  },
  {
    id: 6,
    forest_name: 'Hiawatha National Forest',
    forest_url: 'https://www.fs.usda.gov/hiawatha',
    start_date: '2020-01-01T08:00:00Z',
    end_date: '2021-12-31T08:59:59Z',
    created: 'now()',
    updated: 'now()',
    org_structure_code: '11-09-10',
    description: 'Hiawatha | Michigan',
    forest_abbr: 'hiawatha',
    wood_cost: 5.00,
    min_cords: 4,
    max_cords: 20,
    timezone: 'America/Detroit',
    cutting_areas: '{}',
    map_links: '{}',
    contact:
    '',
    poss_financial_id: '999900022',
    state: 'Michigan',
    permit_type: 'fuel',
    region: 9
  },
  {
    id: 7,
    forest_name: 'Grand Mesa Uncompahgre & Gunnison National Forest',
    forest_url: 'https://www.fs.usda.gov/gmug',
    start_date: '2020-01-01T08:00:00Z',
    end_date: '2021-12-31T08:59:59Z',
    created: 'now()',
    updated: 'now()',
    org_structure_code: '11-02-04',
    description: 'Grand Mesa Uncompahgre and Gunnison | Colorado',
    forest_abbr: 'gmug',
    wood_cost: 5.00,
    min_cords: 4,
    max_cords: 20,
    timezone: 'America/Boise',
    cutting_areas: '{}',
    map_links: '{}',
    contact: '',
    poss_financial_id: '999900024',
    state: 'Colorado',
    permit_type: 'fuel',
    region: 2
  }
];
module.exports = {
  up(queryInterface) {
    return queryInterface.bulkInsert('fsForests', forests);
  },
  down(queryInterface) {
    return queryInterface.bulkDelete('fsForests');
  }
};

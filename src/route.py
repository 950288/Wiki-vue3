import json

def generate_route_ts(json_file):
    with open(json_file, 'r') as f:
        data = json.load(f)

    routes = data['routes']

    imports = []
    components = []

    for route in routes:
        component_name = route['name']
        component_file = f"@/pages/{component_name.lower()}.vue"
        imports.append(f'import {component_name} from "{component_file}";')
        components.append({
            "component": component_name,
            "name": route['name'],
            "path": route['path']
        })

    imports_str = '\n'.join(imports)
    components_str = ',\n        '.join([f"{{component: {component['component']}, name: '{component['name']}', path: '{component['path']}'}}" for component in components])

    route_ts = f'''{imports_str}

export const routes = [
    {components_str}
]
export default routes;
'''

    with open('routes.ts', 'w') as f:
        f.write(route_ts)

generate_route_ts('routes.json')
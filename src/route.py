import json

def generate_route_ts(json_file):
    with open(json_file, 'r') as f:
        headings = json.load(f)

    components = []


    # for route in routes:
    #     component_name = route['name']
    #     component_file = f"@/pages/{component_name.lower()}.vue"
    #     components.append({
    #         "component": "() => import('@/pages/"+component_name.lower()+".vue')",
    #         "name": route['name'],
    #         "path": '/vue3' + route['path']
    #     })

    # components_str = ',\n        '.join([f"{{component: {component['component']}, name: '{component['name']}', path: '{component['path']}'}}" for component in components])

    for key in headings:
        if headings[key] == "":
            component_name = key 
            if component_name == "Home":
                path = ""
            else:
                path = component_name.lower().replace(" ", "-")
            components.append({
                "component": "() => import('@/pages/"+component_name.lower()+".vue')",
                "name": component_name,
                "path": '/vue3/' + path
            })
        else:
           for key_2 in headings[key]:
                component_name = key_2
                components.append({
                    "component": "() => import('@/pages/"+component_name.lower()+".vue')",
                    "name": component_name,
                    "path": '/vue3/' + key_2.lower().replace(" ", "-")
                })
    
    components_str = ',\n\t'.join([f"{{component: {component['component']}, name: '{component['name']}', path: '{component['path']}'}}" for component in components])

    route_ts = f'''

export const routes = [
\t{components_str}
]
export const headings = {headings}
'''

    with open('routes.ts', 'w') as f:
        f.write(route_ts)

generate_route_ts('heading.json')
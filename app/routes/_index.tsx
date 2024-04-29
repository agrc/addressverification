import Graphic from '@arcgis/core/Graphic';
import type { MetaFunction } from '@remix-run/node';
import { useState } from 'react';
import Sherlock, {
  LocatorSuggestProvider,
} from 'utah-design-system/src/Sherlock';

export const meta: MetaFunction = () => {
  return [
    { title: 'Utah Address Verification' },
    {
      name: 'description',
      content: 'Verify addresses within the State of Utah',
    },
  ];
};

export default function Index() {
  const url: string =
    'https://masquerade.ugrc.utah.gov/arcgis/rest/services/UtahLocator/GeocodeServer';
  const [matches, setMatches] = useState<Graphic[] | null>(null);

  return (
    <div className="p-10 font-sans">
      <Sherlock
        label="Locator Suggestion"
        maxResultsToDisplay={5}
        onSherlockMatch={(matches: Graphic[]) => setMatches(matches)}
        placeHolder="search by address..."
        provider={new LocatorSuggestProvider(url, 3857)}
      />
      <pre className="max-h-64 overflow-auto">
        {JSON.stringify(matches, null, '  ')}
      </pre>
    </div>
  );
}

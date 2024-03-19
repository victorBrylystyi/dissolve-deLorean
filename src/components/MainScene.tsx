import { useControls } from "leva";
import { useCallback, useEffect, useState } from "react";
import { DeLorean } from "./DeLorean";


export const MainScene = () => {

    const { deLorean, dissolveColor } = useControls({
        deLorean: {
          value: "show",
          options: ["show", "hide"],
        },
        dissolveColor: {
            value: '#00d7f2'
        }
    });

    const [visibleItem, setVisibleItem] = useState(deLorean);
    const onFadeOut = useCallback(() => setVisibleItem(deLorean), [setVisibleItem, deLorean]);

    // useEffect(() => console.log(visibleItem));

    useEffect(() => {
        if (deLorean === 'show') {
            onFadeOut();
        }
    }, [deLorean, onFadeOut])

    return (
        <>
            { visibleItem === "show" && (
                <DeLorean
                    dissolveVisible = {deLorean === "show"}
                    onFadeOut={onFadeOut}
                    dissolveColor={dissolveColor}

                />
            )}
        </>
    );
};
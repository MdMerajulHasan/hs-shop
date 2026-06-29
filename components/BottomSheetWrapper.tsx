import React, { forwardRef, useCallback } from "react";
import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";

type Props = {
    children: React.ReactNode;
    snapPoints?: string[];
};

const BottomSheetWrapper = forwardRef<BottomSheet, Props>(
    ({ children, snapPoints }, ref) => {

        const renderBackdrop = useCallback(
            (props: any) => (
                <BottomSheetBackdrop
                    {...props}
                    appearsOnIndex={0}
                    disappearsOnIndex={-1}
                    opacity={0.4}
                    style={{ backgroundColor: "#000" }}
                    pressBehavior="close"
                />
            ),
            []
        );

        return (
            <BottomSheet
                ref={ref}
                index={-1}
                snapPoints={snapPoints}
                enablePanDownToClose
                backdropComponent={renderBackdrop}
                onChange={(index) => {
                    console.log("BottomSheet index:", index);
                }}
                onAnimate={(fromIndex, toIndex) => {
                    console.log(fromIndex, "->", toIndex);
                }}
            >
                {children}
            </BottomSheet>
        );
    }
);

BottomSheetWrapper.displayName = "BottomSheetWrapper";

export default BottomSheetWrapper;

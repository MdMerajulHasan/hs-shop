import { BottomSheetBackdrop, BottomSheetModal } from "@gorhom/bottom-sheet";
import React, { forwardRef, useCallback } from "react";

type Props = {
    children: React.ReactNode;
    snapPoints?: string[];
};

const BottomSheetWrapper = forwardRef<BottomSheetModal, Props>(
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
            <BottomSheetModal
                ref={ref}
                snapPoints={snapPoints}
                backdropComponent={renderBackdrop}
                enablePanDownToClose
            >
                {children}
            </BottomSheetModal>
        );
    }
);

BottomSheetWrapper.displayName = "BottomSheetWrapper";

export default BottomSheetWrapper;

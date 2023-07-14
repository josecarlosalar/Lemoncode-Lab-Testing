import React from 'react';
import { useConfirmationDialog } from './confirmation-dialog.hook';
import { act, renderHook } from '@testing-library/react';


describe('useConfirmationDialog', () => {
    it('should return isOpen false', () => {
        //Arrange

        //Act
        const { result } = renderHook(() => useConfirmationDialog());

        //Assert
        expect(result.current.isOpen).toEqual(false);
    });
    
    it('should return itemToDelete', () => {
        //Arrange

        //Act
        const { result } = renderHook(() => useConfirmationDialog());

        //Assert
        expect(result.current.itemToDelete).toEqual({ id: '', name: '' });
    });
    
    it('should return onAccept', () => {
        //Arrange

        //Act
        const { result } = renderHook(() => useConfirmationDialog());

        //Assert
        expect(result.current.onAccept).toBeDefined();
    });

    it('should return onClose', () => {
        //Arrange

        //Act
        const { result } = renderHook(() => useConfirmationDialog());

        //Assert
        expect(result.current.onClose).toBeDefined();
    });

    it('should return onOpenDialog', () => {
        //Arrange

        //Act
        const { result } = renderHook(() => useConfirmationDialog());

        //Assert
        expect(result.current.onOpenDialog).toBeDefined();
    });

    it('should set isOpen to true', () => {
        //Arrange
        
        //Act
        const { result } = renderHook(() => useConfirmationDialog());
        
        act(() => {
            result.current.onOpenDialog({ id: '1', name: 'test' });
        });

        //Assert
        expect(result.current.isOpen).toEqual(true);
    });

    
});



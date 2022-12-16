import React from "react";

import { IconContainer, InputContainer, InputText, ErrorText } from './styles';
import { Controller } from 'react-hook-form';

const Input = ({leftIcon, name, control, ErrorMensage, Value, ...rest}) => {

    return (
        <>
            <InputContainer>
                {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
                <Controller 
                    name={ name }
                    control={ control }
                    error={ErrorMensage}
                    rules={{ required: true }}
                    render={({ field }) => <InputText {...field}{...rest} value={Value} key={name}/>}
                />
            </InputContainer>
            { ErrorMensage ? <ErrorText>{ErrorMensage}</ErrorText> : null}
        </>
    )
}

export { Input }




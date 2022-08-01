export enum LogOnFailedReason {
    Undefined = "Undefined",
    IncorrectLogin = "IncorrectLogin",
    PasswordLengthInvalid = "PasswordLengthInvalid",
    PasswordExpired = "PasswordExpired",
    ExceededFailedLogOnLimit = "ExceededFailedLogOnLimit",
    LoginLocked = "LoginLocked",
}

import { configure, getLogger, connectLogger } from "log4js"

configure({
    replaceConsole: true,
    appenders: {
        // 以日期划分日志文件
        stdout: { // 控制台输出
            type: 'stdout'
        },
        req: { // 请求日志
            type: "dateFile",
            filename: "logs/reqlog/",
            pattern: "req-yyyy-MM-dd.log",
            backups: 30, // 保留最新的30个日志文件
            compress: true,
            alwaysIncludePattern: true
        },
        err: { // 错误日志
            type: "dateFile",
            filename: "logs/errlog/",
            pattern: "err-yyyy-MM-dd.log",
            backups: 30,
            compress: true,
            alwaysIncludePattern: true
        },
        oth: { // 其他日志
            type: "dateFile",
            filename: "logs/othlog/",
            pattern: "oth-yyyy-MM-dd.log",
            backups: 30,
            compress: true,
            alwaysIncludePattern: true
        },
        wx: { // 微信推送
            type: "dateFile",
            filename: "logs/wxlog/",
            pattern: "wx-yyyy-MM-dd.log",
            backups: 30,
            compress: true,
            alwaysIncludePattern: true
        },

        // 以文件大小划分日志文件
        info: { // 信息日志
            type: "file",
            filename: "logs/out.log",
            maxLogSize: 10485760, // 10MB,日志文件大小,超过该size则自动创建新的日志文件
            backups: 30,
            compress: true
        }
    },
    categories: {
        // ALL, TRACE, DEBUG, INFO, WARN, ERROR, FATAL, MARK, OFF
        default: { appenders: ["stdout", "req"], level: "DEBUG" },
        err: { appenders: ["stdout", "err"], level: "ERROR" },
        oth: { appenders: ["stdout", "oth"], level: "INFO" },
        wx: { appenders: ["stdout", "wx"], level: "INFO" },
        info: { appenders: ["stdout", "info"], level: "INFO" }
    }
})

const logger = getLogger("info");

export default logger

// exports.Logger = function(name) {
//     return getLogger(name || "default")
// }

// exports.useLogger = function(app, logger) {
//     app.use(connectLogger(logger || Logger("default"), {
//         format: "[[:remote-addr :method :url :status :response-timems][:referrer HTTP/:http-version :user-agent]]"
//     }))
// }

// 使用
/*
const log4js= require('./log-config')
const logger = log4js.getLogger()//根据需要获取logger
const errlogger = log4js.getLogger('err')
const othlogger = log4js.getLogger('oth')
 
//结合express使用，记录请求日志
app = express()
log4js.useLogger(app,logger)//这样会自动记录每次请求信息，放在其他use上面
//手动记录，可以代替console.log
logger.info('test info 1')
errlogger.err('test error 1')
othlogger.info('test info 2')
*/